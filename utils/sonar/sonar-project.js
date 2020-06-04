const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
  serverUrl: 'http://18.194.74.172:9000',
  options: {
    'sonar.sources': 'src',
    'sonar.exclusions': '**/*.spec.ts',
    'sonar.tests': 'src',
    'sonar.test.inclusions': '**/*.spec.ts',
    'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.testExecutionReportPaths': 'reports/ut_report.xml'
  }
}, () => { });