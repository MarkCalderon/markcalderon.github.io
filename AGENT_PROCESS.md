# Agent Execution Process

Use this process for every task unless the user explicitly asks to skip a step.

## Mandatory Rules
1. Always create a plan before executing any code or file changes.
2. Before writing new code, check for existing reusable utilities, helpers, and functions.
3. For new features, review implementation best practices and UI/UX design standards before coding.
4. In TypeScript code, do not use `any`, type assertions, or `as` casts.

## Standard Workflow
1. Clarify the request and constraints.
   - Confirm expected outcome, scope, and any non-goals.
   - Identify assumptions that may affect implementation.

2. Plan first (no execution yet).
   - Break work into small, ordered steps.
   - Call out risks, dependencies, and validation approach.
   - Prefer the smallest viable change.

3. Reuse before create.
   - Search for existing utilities, shared components, hooks, services, and patterns.
   - Reuse or extend existing code where appropriate instead of duplicating logic.

4. Validate impact before editing.
   - Identify files likely affected by the change.
   - Check for related tests and integration points.
   - Preserve existing behavior unless changes are explicitly requested.

5. For new features, align with stack and design system standards.
   - Use `TypeScript` for all new app code and prefer strict, explicit typing patterns.
   - Use `shadcn/ui` components as the default UI building blocks.
   - Style with `Tailwind CSS` and follow consistent spacing, typography, and state patterns.
   - For font sizing, use Tailwind text size utilities (such as `text-xs`, `text-sm`, `text-base`, `text-lg`) rather than arbitrary custom font-size values.
   - Apply route patterns using `TanStack Router` conventions.
   - Handle server state with `TanStack Query` (query keys, loading/error states, invalidation).
   - Handle forms with `TanStack Form` (schema/validation, touched/error states, submit lifecycle).
   - Check accessibility basics (labels, keyboard navigation, focus states, contrast) before finalizing UI.

6. Implement incrementally.
   - Make focused, atomic edits aligned with the plan.
   - Keep naming and structure consistent with project conventions.
   - Add concise comments only for non-obvious logic.
   - For TypeScript, prefer inferred types, explicit interfaces/types, and runtime narrowing with type guards instead of assertions.

7. Verify thoroughly.
   - Run the most relevant tests/checks for changed areas.
   - Always run a TypeScript/type/error check (`tsc` or project equivalent) before finalizing.
   - Run `webhint` (or project accessibility checker equivalent) to validate accessibility issues for relevant UI/frontend changes.
   - Fix type and runtime errors found during verification when feasible in the current scope.
   - Resolve lint/type/test failures introduced by the changes.
   - If full verification is not possible, document what was not validated.

8. Document and communicate.
   - Update docs or usage notes when behavior or interfaces change.
   - Summarize what changed, why, and any tradeoffs.
   - Provide follow-up steps when useful (test commands, rollout notes, cleanup tasks).

## Safety And Quality Guardrails
- Do not commit secrets, keys, or sensitive environment data.
- Avoid destructive operations unless explicitly requested.
- Do not broaden scope without user approval.
- Favor backward-compatible changes when possible.
- Keep commits scoped to one concern.
- Prefer extending existing `shadcn/ui` patterns over introducing one-off custom UI.
- For TypeScript, avoid `any`, `as`, angle-bracket assertions, and non-null assertions (`!`) unless explicitly approved.
