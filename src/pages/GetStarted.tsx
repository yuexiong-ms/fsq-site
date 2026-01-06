import { motion } from 'framer-motion';
import { PlatformTabs, PlatformContent, type Platform } from '../components/common/PlatformTabs';

// Code block component for consistent styling
const CodeBlock = ({ children, className = '' }: { children: string; className?: string }) => (
  <pre className={`bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm ${className}`}>
    <code>{children}</code>
  </pre>
);

// Step component for consistent section styling
const Step = ({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold text-purple-primary mb-4">
      {number}. {title}
    </h3>
    {children}
  </div>
);

// Info box component
const InfoBox = ({
  children,
  variant = 'info',
}: {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning';
}) => {
  const styles = {
    info: 'bg-blue-50 border-purple-primary',
    success: 'bg-green-50 border-green-500',
    warning: 'bg-amber-50 border-amber-500',
  };

  return (
    <div className={`border-l-4 p-4 rounded ${styles[variant]}`}>
      <div className="text-slate-700">{children}</div>
    </div>
  );
};

// Prerequisites content per platform
const PrerequisitesContent = ({ platform }: { platform: Platform }) => {
  const prerequisites = {
    windows: [
      'Python 3.10 or higher',
      'Windows operating system',
      'uv package manager (recommended)',
      'VS Code or Cursor',
    ],
    macos: [
      'macOS 10.15+ (macOS 12+ recommended)',
      'Python 3.10 or higher',
      'Node.js 16+',
      'Xcode Command Line Tools',
      'VS Code or Cursor',
    ],
    mobile: [
      'Python 3.10 or higher',
      'VS Code or Cursor',
      'BrowserStack account (free trial available)',
    ],
  };

  return (
    <div className="bg-slate-50 rounded-lg p-6">
      <ul className="list-disc list-inside space-y-2 text-slate-700">
        {prerequisites[platform].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Automation setup content per platform
const AutomationSetupContent = ({ platform }: { platform: Platform }) => {
  if (platform === 'windows') {
    return (
      <div className="space-y-4">
        <p className="text-slate-700">
          Windows automation uses <strong>PyWinauto</strong> - no Appium installation required.
        </p>
        <div className="bg-slate-50 rounded-lg p-6">
          <p className="font-semibold text-slate-900 mb-3">Configure your application:</p>
          <p className="text-slate-700 mb-3">
            Edit <code className="bg-slate-200 px-2 py-1 rounded">conf/pywinauto_conf.json</code>:
          </p>
          <CodeBlock>
            {`{
  "PYWINAUTO_CONFIG": {
    "app_name": "Your Application Name",
    "exe": "C:\\\\Path\\\\To\\\\Your\\\\App.exe",
    "window_title_re": "window name",
    "launch_args": ["--arg1", "--arg2"]
  }
}`}
          </CodeBlock>
          <ul className="list-disc list-inside space-y-1 text-slate-600 mt-4 text-sm">
            <li>
              <strong>exe</strong>: Full path to the application executable
            </li>
            <li>
              <strong>window_title_re</strong>: Regex pattern to match the window title
            </li>
            <li>
              <strong>launch_args</strong>: (Optional) Command-line arguments
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (platform === 'macos') {
    return (
      <div className="space-y-4">
        <p className="text-slate-700">
          macOS automation uses <strong>Appium with Mac2 driver</strong>.
        </p>

        {/* Install Appium */}
        <div className="bg-slate-50 rounded-lg p-6">
          <p className="font-semibold text-slate-900 mb-3">Install Appium and Mac2 Driver:</p>
          <CodeBlock>
            {`npm install -g appium
appium driver install mac2`}
          </CodeBlock>
        </div>

        {/* System Permissions */}
        <div className="bg-slate-50 rounded-lg p-6">
          <p className="font-semibold text-slate-900 mb-3">Configure System Permissions:</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>
              Open <strong>System Settings</strong> → <strong>Privacy & Security</strong> →{' '}
              <strong>Accessibility</strong>
            </li>
            <li>
              Click <strong>+</strong> and add Terminal and VS Code
            </li>
            <li>
              (Optional) Enable <strong>Screen Recording</strong> permission for the same apps
            </li>
          </ol>
        </div>

        {/* Configuration */}
        <div className="bg-slate-50 rounded-lg p-6">
          <p className="font-semibold text-slate-900 mb-3">Configure your application:</p>
          <p className="text-slate-700 mb-3">
            Edit <code className="bg-slate-200 px-2 py-1 rounded">conf/appium_conf.json</code> (mac
            section):
          </p>
          <CodeBlock>
            {`{
  "APPIUM_DRIVER_CONFIGS": {
    "mac": {
      "platformName": "Mac",
      "automationName": "Mac2",
      "bundleId": "com.example.yourapp",
      "server_url": "http://127.0.0.1:4723"
    }
  }
}`}
          </CodeBlock>
          <p className="text-slate-600 mt-3 text-sm">
            <strong>bundleId</strong>: The bundle identifier of your macOS application (e.g.,
            com.apple.calculator)
          </p>
        </div>
      </div>
    );
  }

  // Mobile
  return (
    <div className="space-y-4">
      <p className="text-slate-700">
        Mobile automation uses <strong>BrowserStack</strong> cloud testing - no local Appium
        installation required.
      </p>

      {/* Register BrowserStack */}
      <div className="bg-slate-50 rounded-lg p-6">
        <p className="font-semibold text-slate-900 mb-3">1. Register for BrowserStack:</p>
        <ol className="list-decimal list-inside space-y-2 text-slate-700">
          <li>
            Visit{' '}
            <a
              href="https://www.browserstack.com/app-automate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-primary hover:underline"
            >
              BrowserStack App Automate
            </a>
          </li>
          <li>Click "Start Free Trial" to register an account</li>
          <li>
            Find your <strong>username</strong> and <strong>access key</strong> in the Access Key
            page
          </li>
        </ol>
      </div>

      {/* Upload App */}
      <div className="bg-slate-50 rounded-lg p-6">
        <p className="font-semibold text-slate-900 mb-3">2. Upload your app to BrowserStack:</p>
        <p className="text-slate-700 mb-3">Upload via BrowserStack console or command line:</p>
        <CodeBlock>
          {`# Android APK
curl -u "username:access_key" -X POST \\
  "https://api-cloud.browserstack.com/app-automate/upload" \\
  -F "file=@/path/to/your/app.apk"

# iOS IPA
curl -u "username:access_key" -X POST \\
  "https://api-cloud.browserstack.com/app-automate/upload" \\
  -F "file=@/path/to/your/app.ipa"`}
        </CodeBlock>
        <p className="text-slate-600 mt-3 text-sm">
          After upload, you'll receive a URL like <code>bs://xxxxxx</code> - save this for
          configuration.
        </p>
      </div>

      {/* Configuration */}
      <div className="bg-slate-50 rounded-lg p-6">
        <p className="font-semibold text-slate-900 mb-3">3. Configure BrowserStack connection:</p>
        <p className="text-slate-700 mb-3">
          Edit <code className="bg-slate-200 px-2 py-1 rounded">conf/appium_conf.json</code>:
        </p>
        <CodeBlock>
          {`{
  "android": {
    "platformName": "Android",
    "deviceName": "Google Pixel 8",
    "platformVersion": "14.0",
    "automationName": "UiAutomator2",
    "server_url": "http://hub.browserstack.com/wd/hub",
    "bstack:options": {
      "userName": "your_browserstack_username",
      "accessKey": "your_browserstack_access_key"
    },
    "appium:app": "bs://your_app_id"
  }
}`}
        </CodeBlock>
      </div>
    </div>
  );
};

// Start server content per platform
const StartServerContent = ({ platform }: { platform: Platform }) => {
  if (platform === 'windows') {
    return (
      <div className="bg-slate-50 rounded-lg p-6">
        <p className="text-slate-700 mb-3">Start the MCP server:</p>
        <CodeBlock>{`python simple_server.py --transport sse`}</CodeBlock>
        <p className="text-slate-600 mt-3 text-sm">
          This starts the PyWinauto MCP server on port 8000.
        </p>
      </div>
    );
  }

  if (platform === 'macos') {
    return (
      <div className="space-y-4">
        <div className="bg-slate-50 rounded-lg p-6">
          <p className="text-slate-700 mb-3">
            <strong>Step 1:</strong> Start the Appium server (keep this terminal open):
          </p>
          <CodeBlock>{`appium server --port 4723`}</CodeBlock>
        </div>
        <div className="bg-slate-50 rounded-lg p-6">
          <p className="text-slate-700 mb-3">
            <strong>Step 2:</strong> In a new terminal, start the MCP server:
          </p>
          <CodeBlock>
            {`cd appium-mcp-server
python simple_server.py --platform mac`}
          </CodeBlock>
        </div>
      </div>
    );
  }

  // Mobile
  return (
    <div className="bg-slate-50 rounded-lg p-6">
      <p className="text-slate-700 mb-3">Start the MCP server:</p>
      <CodeBlock>
        {`cd appium-mcp-server
python simple_server.py --platform android`}
      </CodeBlock>
      <p className="text-slate-600 mt-3 text-sm">
        For iOS testing, use <code>--platform ios</code> instead.
      </p>
      <InfoBox variant="info">
        <p>
          <strong>Note:</strong> No local Appium server needed - BrowserStack handles the device
          connection in the cloud.
        </p>
      </InfoBox>
    </div>
  );
};

// Example prompts per platform
const ExamplePromptContent = ({ platform }: { platform: Platform }) => {
  const prompts = {
    windows: `Scenario: Download PDF file
Given Edge is launched
When I navigate to "https://getsamplefiles.com/download/pdf/sample-1.pdf"
Then the Downloads pane should appear
When I navigate to "edge://downloads"
Then "sample-1.pdf" should appear in download list

Please use win-auto-mcp to execute the following instructions:
Requirements:
1. Before executing the first step, call before_gen_code, and after all steps are completed, sequentially call preview_code_changes and confirm_code_change.
2. Execute each step exactly as written, in order.
3. Do not modify, merge, skip, or add any step.
4. Use only win-auto-mcp API calls.`,
    macos: `Scenario: Test macOS Calculator app
Given I have launched Calculator app
When I click button "5"
And I click button "+"
And I click button "3"
And I click button "="
Then The result should be "8"

Please use appium-mcp-server to execute the following instructions:
Requirements:
1. Before executing the first step, call clear_cache, and after all steps are completed, sequentially call preview_code_changes and confirm_code_change.
2. Execute each step exactly as written, in order.
3. Do not modify, merge, skip, or add any step.
4. Use only appium-mcp-server API calls.`,
    mobile: `Scenario: Test msn.com website on Edge
Given I have launched Edge browser
When I click the search box in NTP page
And I input "msn.com" in the search box
And I press enter to navigate to the page
And I wait for the page to load completely
Then I should see the tab with the title "msn.com"

Please use appium-mcp-server to execute the following instructions:
Requirements:
1. Before executing the first step, call clear_cache, and after all steps are completed, sequentially call preview_code_changes and confirm_code_change.
2. Execute each step exactly as written, in order.
3. Do not modify, merge, skip, or add any step.
4. Use only appium-mcp-server API calls.`,
  };

  return (
    <div className="bg-slate-50 rounded-lg p-6">
      <pre className="text-sm text-slate-700 whitespace-pre-wrap">{prompts[platform]}</pre>
    </div>
  );
};

// MCP Config content per platform
const MCPConfigContent = ({ platform }: { platform: Platform }) => {
  const configs = {
    windows: {
      serverName: 'pywinauto',
      args: `[
        "C:\\\\Users\\\\<username>\\\\projects\\\\AutoGenesis\\\\pywinauto-mcp-server\\\\simple_server.py",
        "--transport",
        "stdio"
      ]`,
    },
    macos: {
      serverName: 'appium-mcp-mac',
      args: `[
        "/Users/<username>/projects/AutoGenesis/appium-mcp-server/simple_server.py",
        "--platform",
        "mac"
      ]`,
    },
    mobile: {
      serverName: 'appium-mcp',
      args: `[
        "/path/to/AutoGenesis/appium-mcp-server/simple_server.py",
        "--platform",
        "android"
      ]`,
    },
  };

  const config = configs[platform];

  return (
    <div className="space-y-4">
      <p className="text-slate-700">
        Add the following to your <code className="bg-slate-200 px-2 py-1 rounded">.vscode/settings.json</code>:
      </p>
      <CodeBlock>
        {`{
  "github.copilot.chat.mcp.servers": {
    "${config.serverName}": {
      "command": "python",
      "args": ${config.args}
    }
  }
}`}
      </CodeBlock>
      <p className="text-slate-600 text-sm">
        Replace the path with your actual project location. For Cursor, add to{' '}
        <code className="bg-slate-200 px-2 py-1 rounded">mcpServers</code> in Cursor settings.
      </p>
    </div>
  );
};

export const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bg via-white to-primary-bg py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Get Started with FSQ
          </h1>
          <p className="text-slate-600 text-center mb-8 text-lg">
            AI-powered automation testing for Windows, macOS, and Mobile platforms
          </p>

          {/* ===== Section 1: Prerequisites ===== */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Prerequisites</h2>
            <PlatformTabs>
              {(platform: Platform) => <PrerequisitesContent platform={platform} />}
            </PlatformTabs>
          </section>

          {/* ===== Section 2: Clone & Install (Shared) ===== */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Clone & Install</h2>

            <Step number={1} title="Clone the Repository">
              <CodeBlock>{`git clone https://github.com/ai-microsoft/AutoGenesis.git
cd AutoGenesis`}</CodeBlock>
            </Step>

            <Step number={2} title="Install Dependencies">
              <CodeBlock>{`pip install -r requirements.txt`}</CodeBlock>
            </Step>
          </section>

          {/* ===== Section 3: Configure Automation Environment ===== */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Configure Automation Environment
            </h2>
            <PlatformTabs>
              {(platform: Platform) => <AutomationSetupContent platform={platform} />}
            </PlatformTabs>
          </section>

          {/* ===== Section 4: Start Server ===== */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Start MCP Server</h2>
            <PlatformTabs>
              {(platform: Platform) => <StartServerContent platform={platform} />}
            </PlatformTabs>
          </section>

          {/* ===== Section 5: Configure MCP Client ===== */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Configure MCP Client</h2>

            <Step number={1} title="Install VS Code and GitHub Copilot">
              <p className="text-slate-700 mb-4">
                Download{' '}
                <a
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-primary hover:underline"
                >
                  VS Code
                </a>{' '}
                and install the GitHub Copilot extension from the Extensions Marketplace.
              </p>
            </Step>

            <Step number={2} title="Install BDD AI Toolkit Extension">
              <div className="bg-slate-50 rounded-lg p-6">
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>Open VS Code Extensions view (Ctrl+Shift+X / Cmd+Shift+X)</li>
                  <li>Search for "BDD AI Toolkit" and install it</li>
                  <li>Search for "Cucumber (Gherkin) Full Support" and install it</li>
                </ol>
              </div>
            </Step>

            <Step number={3} title="Configure MCP Server Connection">
              <PlatformTabs>
                {(platform: Platform) => <MCPConfigContent platform={platform} />}
              </PlatformTabs>
            </Step>
          </section>

          {/* ===== Section 6: Generate Test Code (Shared) ===== */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Generate Test Code</h2>

            <Step number={1} title="Write Test Cases">
              <p className="text-slate-700 mb-4">
                Write BDD test cases in Gherkin format. The project includes sample test cases in{' '}
                <code className="bg-slate-200 px-2 py-1 rounded">behave-demo/features/</code>{' '}
                directory.
              </p>
            </Step>

            <Step number={2} title="Send Prompt to Generate Code">
              <p className="text-slate-700 mb-4">
                Switch to Agent mode in Copilot Chat and send a prompt with your test scenario:
              </p>
              <PlatformTabs>
                {(platform: Platform) => <ExamplePromptContent platform={platform} />}
              </PlatformTabs>
              <p className="text-slate-600 mt-4 text-sm">
                AI will call MCP tools to automatically generate step definition code.
              </p>
            </Step>
          </section>

          {/* ===== Section 7: Run Tests (Shared) ===== */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Run Tests</h2>

            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 mb-3">Run a specific test scenario:</p>
              <CodeBlock>{`behave --name "Scenario Name"`}</CodeBlock>

              <p className="text-slate-700 mt-6 mb-3">More options:</p>
              <CodeBlock>
                {`# Generate JSON report
behave --format json -o reports/results.json

# Filter using tags
behave --tags=@smoke

# Verbose output
behave -v`}
              </CodeBlock>
            </div>
          </section>

          {/* ===== Section 8: Troubleshooting ===== */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Troubleshooting</h2>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-2">MCP Server Cannot Start</h4>
                <p className="text-slate-700">
                  Check Python version is 3.10+ with <code>python --version</code>. Review logs in{' '}
                  <code>logs/mcp_server.log</code>.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  AI Client Cannot Recognize MCP Tools
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Restart VS Code or Cursor</li>
                  <li>Verify MCP configuration path is correct</li>
                  <li>Confirm MCP Server has started successfully</li>
                </ul>
              </div>

              <PlatformTabs>
                {(platform: Platform) => (
                  <PlatformContent
                    platform={platform}
                    windows={
                      <div className="bg-slate-50 rounded-lg p-6">
                        <h4 className="font-semibold text-slate-900 mb-2">Cannot Find Element</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-700">
                          <li>Ensure the target application is open and active</li>
                          <li>Some applications may require administrator privileges</li>
                          <li>Verify element's title and control_type are correct</li>
                        </ul>
                      </div>
                    }
                    macos={
                      <div className="bg-slate-50 rounded-lg p-6">
                        <h4 className="font-semibold text-slate-900 mb-2">
                          Appium Server Cannot Start
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-700">
                          <li>
                            Run <code>sudo xcodebuild -runFirstLaunch</code> for WebDriverAgentMac
                            errors
                          </li>
                          <li>Check Accessibility permissions in System Settings</li>
                          <li>
                            Verify Mac2 driver is installed with{' '}
                            <code>appium driver install mac2</code>
                          </li>
                        </ul>
                      </div>
                    }
                    mobile={
                      <div className="bg-slate-50 rounded-lg p-6">
                        <h4 className="font-semibold text-slate-900 mb-2">
                          BrowserStack Connection Failed
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-700">
                          <li>Verify username and access key are correct</li>
                          <li>Check network connection</li>
                          <li>Confirm BrowserStack account is active</li>
                        </ul>
                      </div>
                    }
                  />
                )}
              </PlatformTabs>
            </div>
          </section>

          {/* Success message */}
          <InfoBox variant="success">
            <p>
              <strong>Congratulations!</strong> You're ready to start generating automated test
              scripts with AI. Check out the sample test cases in the project to learn more.
            </p>
          </InfoBox>
        </motion.div>
      </div>
    </div>
  );
};
