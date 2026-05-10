document.querySelectorAll(".js-demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const endpoint =
      form.dataset.endpoint ||
      window.PALLAS_API_ENDPOINT ||
      "";

    if (!endpoint || endpoint.includes("YOUR-VERCEL-PROJECT")) {
      const note = form.querySelector(".form-note");
      if (note) {
        note.textContent =
          "Demo request backend is not configured yet. Add your Vercel endpoint in site-config.js.";
      }
      return;
    }

    const payload = {
      name: data.get("name") || "",
      organization: data.get("organization") || "",
      email: data.get("email") || "",
      product: data.get("product") || "",
      use_case: data.get("use_case") || ""
    };

    const submitButton = form.querySelector('button[type="submit"]');
    const note = form.querySelector(".form-note");
    const originalText = submitButton ? submitButton.textContent : "";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    if (note) {
      note.textContent = "Submitting your request...";
    }

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(async (response) => {
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(result.error || "Unable to submit your request.");
        }
        form.reset();
        if (note) {
          note.textContent =
            result.message ||
            "Request received. We will follow up with the right demo or POC link.";
        }
      })
      .catch((error) => {
        if (note) {
          note.textContent =
            error.message ||
            "We could not submit the request right now. Please try again shortly.";
        }
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      });
  });
});
