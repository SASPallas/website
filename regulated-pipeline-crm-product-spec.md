# Regulated Pipeline CRM Product Spec

## Product Intent

Regulated Pipeline CRM turns FDA GxP and EU GxP process documents into a live decision system.

The product should do two things at once:

1. convert regulated process requirement documents into a structured milestone and process dashboard
2. incorporate secondary operating signals so teams can track what is happening around the pipeline, not just what the paper says should happen

This second capability is the distinctive layer:

**Pallas turns process documents, email threads, chat messages, and external signals into live systems that help teams convert noise into trackable actions and clearer judgment.**

## Core Product Promise

The system is not just a repository for validation artifacts.

It is a live operating layer that:

- extracts the required structure from GxP documents
- creates milestone logic, task logic, approval logic, and evidence gates
- tracks the actual state of the pipeline as teams work
- incorporates human communications and outside signals when they affect readiness, risk, or next action

## The Two Workstreams

The product spec should explicitly separate the product into two connected workstreams.

### Workstream 1: Process Intelligence from GxP Documents

This is the primary workstream and must exist first.

Its purpose is to convert static regulated documentation into a structured, operational system.

#### Inputs

- master validation plans
- SOPs
- URS / requirements documents
- traceability matrices
- validation protocols
- summary reports
- quality policies
- retention and archival requirements
- related FDA GxP and EU GxP logic

#### System behavior

The product should:

1. parse uploaded process documents
2. identify milestone candidates
3. extract tasks, approvals, dependencies, and evidence needs
4. normalize those into a structured pipeline
5. cross-reference the extracted logic against applicable FDA GxP and EU GxP requirements
6. present the result as a live milestone and process dashboard

#### Expected outputs

- milestone tracker
- task checklist per milestone
- approval requirements
- evidence requirements
- dependencies and blockers
- regulatory overlays
- retention and recordkeeping flags
- readiness state for each milestone

#### Example

A Master Validation Plan might generate milestones such as:

- define scope and intended use
- approve requirements baseline
- complete risk and control mapping
- approve protocol package
- execute testing
- resolve deviations
- approve summary report
- authorize release and archive records

Each milestone should then contain the exact actions, signoffs, and proof required before progression.

#### MVP requirement

The system must be able to take a GxP process document and produce a usable milestone dashboard without requiring the user to manually rebuild the process from scratch.

That is the minimum viable promise.

### Workstream 2: Secondary Signal Ingestion and Action Tracking

This is the differentiating workstream.

Its purpose is not to replace the document-derived process logic.
Its purpose is to capture the signals that determine what is actually happening around the pipeline.

These signals often live outside the formal validation documents.

#### Inputs

- email threads
- chat messages
- comments and review notes
- change-management messages
- meeting notes
- status updates
- issue logs
- model review commentary
- external alerts or policy changes

#### Why this matters

The paper process tells the team what should happen.
The communication layer tells the team what is actually happening.

Examples:

- a milestone is formally open, but a Slack thread reveals QA has concerns
- a required evidence artifact exists, but an email thread reveals it is out of date
- a release looks ready on paper, but a reviewer note reveals unresolved ambiguity
- a policy update introduces a new retention concern that the original plan did not anticipate

The product should make these signals visible and actionable without letting them become unstructured clutter.

#### System behavior

The product should:

1. ingest selected communications and signal sources
2. detect references to milestones, deliverables, risks, approvals, blockers, and readiness
3. convert relevant findings into structured items
4. attach those items to the correct milestone or pipeline stage
5. distinguish between:
   - source-of-truth process requirements
   - signal-derived considerations
6. present those signals as actions, flags, or considerations the team can track

#### Expected outputs

- open considerations
- potential blockers
- unresolved questions
- flagged risks
- missing or stale evidence warnings
- approval follow-up tasks
- readiness concerns
- recommended next actions

#### Important design principle

Secondary signals should not silently rewrite the regulated process model.

Instead, they should create one of the following:

- a tracked consideration
- a proposed task
- a proposed blocker
- a proposed escalation
- a recommended next action

This keeps the product credible.

In a regulated environment, email and chat should enrich the operating picture, not become an uncontrolled alternative to formal process logic.

## How the Two Workstreams Interact

The product should combine the two workstreams in a disciplined way.

### Workstream 1 defines the skeleton

The document-derived process model creates:

- milestones
- task structure
- approvals
- dependencies
- evidence gates
- progression rules

### Workstream 2 adds live operating context

The signal layer adds:

- blockers
- concerns
- ambiguity
- urgency
- stale artifacts
- relationship or coordination issues
- new follow-up actions

### Combined result

The product becomes a live pipeline system where:

- the process document defines what must happen
- operational signals show what is actually happening
- the dashboard reflects both

This is the right architecture.

## Product Surface

The UI should make the distinction visible.

### Left rail

- milestone tracker
- status state
- completion state
- blocked / at risk state

### Right panel

- required tasks from the process document
- approvals and evidence checklist
- FDA GxP logic
- EU GxP logic
- retention / archival logic
- signal-derived considerations
- recommended next actions

### Separate labeling

Use labels such as:

- `Required by source document`
- `Signal-derived consideration`
- `Awaiting approval`
- `Potential blocker`
- `Recommended next step`

That keeps the product readable and trustworthy.

## Validation Rules

The system must validate milestone progression against structured rules.

### Hard rules

These come from Workstream 1 and must block progression when incomplete.

Examples:

- required approval missing
- required evidence missing
- prerequisite milestone incomplete
- required regulatory overlay unresolved

### Soft rules

These come from Workstream 2 and should influence judgment without automatically changing status unless explicitly accepted.

Examples:

- recent reviewer concern in email
- unresolved chat thread about scope ambiguity
- stale attachment referenced in comments
- new policy interpretation requiring review

### Decision logic

A milestone should advance only when:

- all hard rules pass
- signal-derived concerns are either resolved, accepted, or explicitly overridden by an authorized reviewer

This is important because it keeps the human in the loop while still making the system operational.

## Design Recommendation for Signal Ingestion

This is the part that needs the most care.

The wrong design would be:

- dumping all email and chat content into the dashboard
- treating every mention as a task
- confusing communication noise with formal requirements

The better design is:

### 1. Filter before structuring

Only ingest communications that are:

- linked to a known milestone
- linked to a known artifact
- linked to a known reviewer, approver, or owner
- linked to a known risk, blocker, or release decision

### 2. Convert messages into structured signal types

Each signal should be typed as one of:

- blocker
- concern
- follow-up
- stale evidence warning
- dependency issue
- approval reminder
- escalation candidate

### 3. Require user confirmation for consequential changes

The system can suggest:

- create task
- mark at risk
- attach to milestone
- request review

But the user should confirm before the product changes milestone status based on communication-derived signals.

### 4. Preserve provenance

Every signal-derived action should show:

- source channel
- source message or thread
- timestamp
- author
- linked milestone
- inferred signal type

This gives the product auditability and trust.

## MVP Recommendation

The MVP should not attempt to solve every communication source at once.

Best MVP sequence:

1. Workstream 1:
   document parsing and milestone generation
2. Workstream 2A:
   manual or forwarded email ingestion
3. Workstream 2B:
   structured comment and note capture inside the product
4. Workstream 2C:
   chat integration and automated signal extraction

This keeps the first release focused while still building toward the differentiated signal layer.

## Product Positioning

The positioning should describe the product as:

**A regulated pipeline CRM that turns GxP documents into live milestone systems and converts communication noise into trackable operating signals.**

Or more simply:

**A live system for regulated process milestones, approvals, evidence, and the signals that affect readiness.**

## Summary

This product must do two things well:

1. dynamically convert GxP process requirement documents into a structured milestone and process dashboard
2. incorporate email, chat, and other secondary signals in a controlled way so teams can track what is actually happening around the process

The key design decision is that the process document creates the formal workflow, while communications and outside signals create structured considerations, blockers, and next actions around that workflow.

That is the right way to combine both layers without weakening the product's credibility.
