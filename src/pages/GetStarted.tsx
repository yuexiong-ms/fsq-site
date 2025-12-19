import { motion } from 'framer-motion';

export const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bg via-white to-primary-bg py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Get Started with FSQ
          </h1>

          {/* Environment Setup */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Environment Setup</h2>

            {/* Step 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">
                1. Make sure you have installed VS Code and GitHub Copilot
              </h3>
              <p className="text-slate-700 mb-4">
                Ensure that Visual Studio Code (VS Code) is installed on your system.
              </p>
              <p className="text-slate-700 mb-2">
                Download link:{' '}
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-primary hover:underline"
                >
                  https://code.visualstudio.com/
                </a>
              </p>
              <p className="text-slate-700 mb-4">
                GitHub Copilot is required to support AI-assisted development. If you are new to GitHub
                Copilot, you can refer to the official guide{' '}
                <a
                  href="https://docs.github.com/en/copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-primary hover:underline"
                >
                  here
                </a>
                .
              </p>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="font-semibold text-slate-900 mb-3">Steps:</p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>Open VS Code.</li>
                  <li>Install the GitHub Copilot extension from the Extensions Marketplace.</li>
                  <li>Sign in with your GitHub account that has access to GitHub Copilot.</li>
                  <li>Open Copilot Auto Approve</li>
                  <li>Close Summarize Agent Conversation History</li>
                </ol>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">
                2. Install the BDD AI Toolkit and Cucumber (Gherkin) Full Support Plugins
              </h3>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="font-semibold text-slate-900 mb-3">Steps:</p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-4">
                  <li>Open VS Code.</li>
                  <li>Go to the Extensions view (Ctrl+Shift+X).</li>
                  <li>Search for BDD AI Toolkit and Cucumber (Gherkin) Full Support</li>
                </ol>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>
                    BDD AI Toolkit will help us to record Automation test scripts and are developed by
                    Consumer Quality team.
                  </li>
                  <li>
                    Cucumber (Gherkin) Full Support will help us to display the BDD testcases syntax
                    coloring
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">3. Setup Environment</h3>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="font-semibold text-slate-900 mb-3">Steps:</p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>Click left pane BDD AI toolkit button, check your environment status</li>
                  <li>NPM and Python(&gt;3.10) require you to install them manually</li>
                  <li>
                    VS Code CLI and UV tool can be installed automatically by clicking the Auto-resolve
                    button.
                  </li>
                </ol>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">
                4. Install Microsoft Edge (Stable or Beta or Canary)
              </h3>
              <p className="text-slate-700">
                <a
                  href="https://www.microsoft.com/en-us/edge/download/insider?form=MA13FJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-primary hover:underline"
                >
                  microsoft.com/en-us/edge/download/insider?form=MA13FJ
                </a>
              </p>
            </div>
          </section>

          {/* Understanding BDD */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Understanding BDD And First Try On AI Test Writing Agent
            </h2>

            {/* Step 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">
                🤖 1. Clone Sample case and understanding BDD
              </h3>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="text-slate-700 mb-3">1. Clone code and open this project with VS Code</p>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                  <code>git clone https://github.com/sqrwm/behave-sample-cases.git</code>
                </pre>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">
                🤖 2. Setup Win Automation MCP Server For a Project
              </h3>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="font-semibold text-slate-900 mb-3">Steps:</p>
                <ol className="list-decimal list-inside space-y-3 text-slate-700">
                  <li>Click "Setup MCP Server"</li>
                  <li>
                    The setup will take about a minute, and you can see the configuration of the mcp
                    server after success.
                  </li>
                  <li>Click "Start" to start the server</li>
                  <li>
                    Verify if mcp server is ready - The server status is "Running" and you can see the
                    MCP tools list
                  </li>
                  <li>
                    [Not Required] Configure your Azure GPT deployment to enable support analyze
                    screenshot. AI MCP Tools
                  </li>
                </ol>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">
                🤖 3. Try a Natural Language Test
              </h3>
              <p className="text-slate-700 mb-4">
                A natural language test is definitely the perfect way to get started. Switch to agent
                mode in Copilot and input #naturalLanguageTaskExecutor &lt;your task&gt;, then send it.
                It will automatically generate the prompt and call MCP tools to complete your task.
              </p>
              <div className="bg-blue-50 border-l-4 border-purple-primary p-4 rounded">
                <p className="text-slate-700">
                  <strong>Tips:</strong> Input this link:{' '}
                  <code className="bg-slate-200 px-2 py-1 rounded">
                    vscode://settings/chat.tools.autoApprove
                  </code>{' '}
                  in your browser to turn on the auto-approve of vs code MCP to make the whole process
                  smoother
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">
                🤖 4. AI Test Writing Flow
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">1. Choose Agent mode:</h4>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Select Agent Mode.</li>
                    <li>Choose Claude Sonnet 4 as your preferred model.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">
                    2. Recording test scripts with MCP Server
                  </h4>
                  <p className="text-slate-700 mb-4">
                    With the MCP server running, interact with GitHub Copilot Chat to begin recording
                    test steps. Copilot will help generate step-by-step test scripts in real time.
                  </p>
                  <p className="text-slate-700 mb-3 font-semibold">
                    This is the prompt demo, you can send this to Copilot Chat manually:
                  </p>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <pre className="text-sm text-slate-700 whitespace-pre-wrap">
                      {`Please use win-auto-mcp to execute the following instructions:

# Original BDD Test Case (strictly follow step-by-step):
Scenario: Download PDF file
Given Edge is launched
    When I navigate to "https://getsamplefiles.com/download/pdf/sample-1.pdf"
    Then the Downloads pane should appear
    When I navigate to "edge://downloads"
    Then "sample-1.pdf" should appear in download list

Requirements:
feature_file = #{your feature file path}
1. Before executing the first step, call \`before_gen_code\`, and after all steps are completed, sequentially call \`preview_code_changes\` and \`confirm_code_change\`.
2. Execute **each step** exactly as written, in order. Do not lose bdd step keyword.
3. **Do not modify, merge, skip, or add any step.**
4. Use **only** win-auto-mcp API calls.
5. Do not close browser`}
                    </pre>
                  </div>
                  <p className="text-slate-700 mt-4">
                    After a scenario is executed, the generated code will be saved like the following
                    path.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">3. Running the Test</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-700 font-semibold mb-2">
                        Option 1: Run from Copilot Extension
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-700 font-semibold mb-2">
                        Option 2: Run Manually via Behave:
                      </p>
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                        <code>
                          {`cd #{your behave-sample-cases path}
uv run behave --name "Search in Bing"`}
                        </code>
                      </pre>
                    </div>
                  </div>
                  <p className="text-slate-700 mt-4">
                    This will execute the scenario "Search in Bing" under the features/ directory using
                    the step definitions in features/steps/.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mt-6">
                <p className="text-slate-700">
                  Congratulations, you have already recorded test script with AI powered and rerun the
                  automation testcases successfully. Next steps, you can try to generate BDD testcases
                  with GitHub Copilot and record the automation test scripts.
                </p>
              </div>
            </div>
          </section>

          {/* Selfhost AI Test Writing Agent */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Selfhost AI Test Writing Agent</h2>

            {/* Generate Testcases */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">
                🎯 Generate Testcases with GitHub Copilot
              </h3>
              <p className="text-slate-700 mb-4">
                When you want to try out some other features, this tool — testCasePromptGenerator — can
                help you generate standard BDD test cases.
              </p>
              <p className="text-slate-700 mb-4">
                Below is the prompt used internally by the tool. If needed, you can also refer to the
                prompt to help optimize these test cases.
              </p>

              <div className="bg-slate-50 rounded-lg p-6">
                <pre className="text-sm text-slate-700 whitespace-pre-wrap">
                  {`Please help me to create <XXX> Testcase, about <some feature description>

You need to create a comprehensive BDD test suite in a single file with the following requirements:

1. **Structure**:
   - Each scenario must have two tags: @[category] and @[level]

2. **Content Quality**:
   - Design logical, comprehensive scenarios covering all functional aspects
   - Follow natural user operation workflows
   - Ensure scenarios are independent and focused on specific functionality
   - Ensure test cases cover complete end-to-end workflows. For example:
      - When a user copies content to clipboard, they should verify by pasting it
      - When a user saves a file, they should verify it was saved correctly
      - When changing settings, verify the changes persist and affect functionality
      - Login flows should include verification of successful authentication
      - When creating or editing content, verify changes are saved and displayed

3. **Specificity**:
   - Use concrete actions instead of vague statements. Example: Use "navigate to https://bing.com" instead of "open a webpage"
   - Every step must explicitly specify content without pronouns or references:
     - ✓ "the page title 'Bing' should appear"
     - ✗ "the current page title should appear"
     - ✓ "the 'Microsoft' and 'Bing' favorites should be deleted"
     - ✗ "the selected favorites should be deleted"

4. **Exclusions**:
   - Omit all UI style validations (button states, highlights, etc.)
   - Focus on functional behavior rather than appearance`}
                </pre>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">Examples</h4>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-600 mb-3">
                    Good Example - A Well-Written BDD Test Case
                  </h5>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <pre className="text-sm text-slate-700 whitespace-pre-wrap mb-4">
                      {`Scenario: Sort favorites alphabetically Z to A
  Given I have favorites "Microsoft", "Bing", and "GitHub" in my Favorites bar
  When I click the Favorites icon in the toolbar
  And I click the "Sort favorites" button
  And I select "Z to A" from the sort options menu
  Then the favorites should be sorted as "Microsoft", "GitHub", "Bing"
  And the "Z to A" option should be checked in the sort options menu`}
                    </pre>
                    <p className="text-slate-700 font-semibold mb-2">Why this is good:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Uses concrete, specific actions with explicit content</li>
                      <li>Focuses on one functionality (sorting alphabetically Z to A)</li>
                      <li>
                        Uses a concise Given statement to establish test prerequisites without detailed
                        setup steps
                      </li>
                      <li>Verifies the actual functional result (sorting order)</li>
                      <li>
                        Avoids UI style validations (button states, icon states, highlights, etc.)
                      </li>
                      <li>Uses explicit names instead of pronouns or references</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-red-600 mb-3">
                    Bad Example - A Poorly Written BDD Test Case
                  </h5>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <pre className="text-sm text-slate-700 whitespace-pre-wrap mb-4">
                      {`Scenario: Sort favorites using different methods
  Given the Favorites flyout is open
  When the user clicks the "Sort favorites" button
  And the user selects "Frequently visited" in the options menu
  Then the sort button icon should change
  And a checkmark should appear before "Frequently visited" in the options menu
  When the user clicks the "Sort favorites" button
  And the user selects "A to Z" in the options menu
  Then the sort button icon should change
  And a checkmark should appear before "A to Z" in the options menu
  When the user clicks the "Sort favorites" button
  And the user selects "Custom" in the options menu
  Then the sort button icon should change
  And a checkmark should appear before "Custom" in the options menu`}
                    </pre>
                    <p className="text-slate-700 font-semibold mb-2">Why this is bad:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Multiple functionalities in one scenario instead of being focused</li>
                      <li>Refers to "the user" instead of using first-person perspective</li>
                      <li>
                        Focuses on UI changes ("icon should change", "checkmark should appear") rather
                        than functional behavior
                      </li>
                      <li>No verification of the actual sorting functionality</li>
                      <li>Lacks a complete flow (no setup to add favorites to sort)</li>
                      <li>Repeats the same pattern multiple times in one scenario</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Automation Test Scripts */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-primary mb-4">
                🎯 Generate Automation Test Scripts
              </h3>
              <p className="text-slate-700">
                You can follow the steps of "AI Test Write Flow" to generate automation test scripts. I
                believe that you have successfully generated the automation test scripts before.
              </p>
            </div>
          </section>

          {/* Known Issues */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Known Issues And Submit Feedback</h2>
            <p className="text-slate-700 mb-4">
              Please send feedback to{' '}
              <a
                href="mailto:fsqgroup@microsoft.com"
                className="text-purple-primary hover:underline"
              >
                fsqgroup@microsoft.com
              </a>{' '}
              if you have any questions.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-slate-700 font-semibold mb-2">Known issues list:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                <li>Don't support vertical tab now, will fix next steps</li>
                <li>
                  AI generates test script fails when Assert fail by design. (for example: demo
                  downloads)
                </li>
              </ul>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
