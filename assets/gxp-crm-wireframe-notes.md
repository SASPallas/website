# GxP CRM Wireframe Notes

Files:
- [gxp-crm-wireframe.svg](/Users/sonfamily/Documents/SONALI/PALLAS-ANALYTICS/Website/assets/gxp-crm-wireframe.svg)

## Intent

This wireframe shows the minimum credible demo experience for the GxP Intelligence CRM:

1. A user uploads a validation or process document.
2. The system extracts milestone logic from that source.
3. Each milestone becomes a structured work package.
4. Progress is only allowed when tasks, approvals, evidence, and regulatory checks validate.

The example source document is named **Cell Orchestration Platform**.

## Layout logic

### 1. Top frame

The top band makes the workspace feel like software, not a landing page.

It shows:
- product identity
- document parse state
- a walkthrough CTA

### 2. Summary row

The first content row gives buyers the logic quickly:
- uploaded source document
- generated milestones
- approvals / controls
- FDA and EU overlays

That lets the viewer understand the product before reading the detailed panel.

### 3. Left rail

The milestone tracker is intentionally narrow and persistent.

It should answer:
- where am I in the process?
- what is complete?
- what is active?
- what is blocked?

The active milestone is emphasized with both color and halo so it reads clearly without adding extra UI noise.

### 4. Right execution panel

The right side owns the operational work.

It is split into three zones:
- **Tasks and checklists**
- **Approvals and evidence**
- **Regulatory logic**

That structure maps directly to the product promise:
- convert process text into actions
- require signoff and proof
- validate completion before progression

## Design choices

- Clean neutral palette with one blue and one teal accent
- No decorative marketing elements
- Dense but readable information hierarchy
- Language tuned for quality / compliance credibility
- Source-linked labels so the system feels grounded in the uploaded plan

## Interaction assumptions

The wireframe implies this behavior:

- clicking a milestone on the left changes the right panel
- checklist items can be complete, pending, or blocked
- approvals are role-based and visible
- evidence is versioned or linked
- regulatory overlays act as validation rules, not just reference content
- the next milestone remains locked until all completion rules pass

## What to prototype next

If this moves into a clickable prototype, the most valuable interactions would be:

1. Milestone switching in the left rail
2. Expanding a task to reveal source citations
3. Opening an approval drawer by role
4. Showing why a milestone is blocked
5. Toggling FDA and EU logic overlays
