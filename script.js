document.querySelectorAll(".js-demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const user = form.dataset.user || "hello";
    const domain = form.dataset.domain || "saspallasanalytics.com";
    const subject = form.dataset.subject || "Demo Request";

    const name = data.get("name") || "";
    const organization = data.get("organization") || "";
    const email = data.get("email") || "";
    const product = data.get("product") || "";
    const useCase = data.get("use_case") || "";

    const body = [
      "Demo request details",
      "",
      `Name: ${name}`,
      `Organization: ${organization}`,
      `Email: ${email}`,
      `Product: ${product}`,
      "",
      "What they want to explore:",
      `${useCase}`,
      "",
      "Next step:",
      "Reply with the most relevant POC or walkthrough link."
    ].join("\n");

    const mailto = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
});
