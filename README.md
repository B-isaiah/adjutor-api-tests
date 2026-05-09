# Adjutor Decisioning API Automation Suite

Automated API test suite for the Adjutor Decisioning APIs under the **Nigerian Country Specific Endpoints** module.

This project was built using:

- Postman
- Newman
- Node.js
- GitHub Actions CI/CD

---

# Project Objective

The goal of this project is to:

- Validate Adjutor Decisioning API endpoints
- Automate API regression checks
- Verify HTTP status codes
- Validate API response messages
- Implement positive and negative API test scenarios
- Support CI-ready automated execution using GitHub Actions

---

# APIs Covered

## Decision Models Module

### TC-DM-001 — Get Decision Models Successfully

**Endpoint**

```http
GET /decisioning/models
```

### Validations
- HTTP 200 status validation
- Response time validation
- JSON response validation

---

### TC-DM-002 — Unauthorized Access to Decision Models

**Endpoint**

```http
GET /decisioning/models
```

### Validations
- HTTP 401/403 validation
- Unauthorized access handling

---

## Borrower Scoring Module

### TC-BS-001 — Successful Borrower Scoring

**Endpoint**

```http
POST /decisioning/models/:id
```

### Validations
- HTTP 200 status validation
- Response message validation
- Credit score items validation
- Response time validation

---

### TC-BS-002 — Missing Required Fields

**Endpoint**

```http
POST /decisioning/models/:id
```

### Validations
- HTTP 400/401/403 validation
- Error response validation

---

# API Test Coverage

## Get Decision Models

### Test Cases
- Successful retrieval of decision models
- Unauthorized request validation
- Response structure validation
- Response time validation

---

## Oraculi Borrower Scoring

### Test Cases
- Successful borrower scoring
- Missing required fields validation
- Invalid BVN validation
- Unauthorized request validation
- Response structure validation
- Performance validation

---

# Technologies Used

| Tool | Purpose |
|------|----------|
| Postman | API test creation |
| Newman | Command-line execution |
| Node.js | Test orchestration |
| dotenv | Environment variable management |
| GitHub Actions | CI/CD pipeline |

---

# Project Structure

```bash
adjutor-api-tests/
│
├── collections/
│   └── Adjutor_Decisioning_API_Test_Suite.postman_collection.json
│
├── environments/
│   └── Adjutor_Test_Environment.postman_environment.json
│
├── test-data/
│   └── borrower-scoring-payloads.json
│
├── docs/
│   └── API-Test-Coverage.md
│
├── reports/
│
├── .github/
│   └── workflows/
│       └── api-tests.yml
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── run-tests.js
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd adjutor-api-tests
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory:

```env
BEARER_TOKEN=your_adjutor_token_here
```

---

# Running Tests

Execute the automation suite locally:

```bash
npm test
```

---

# Newman Execution

The suite runs using Newman:

```bash
newman run collections/Adjutor_Decisioning_API_Test_Suite.postman_collection.json \
-e environments/Adjutor_Test_Environment.postman_environment.json
```

---

# Defensive Assertion Handling

The automation suite implements conditional assertions to improve test stability.

Implemented safeguards:

- JSON parsing only executes when:
  
```javascript
pm.response.code === 200
```

- Schema checks are skipped on failed requests
- Unauthorized responses are handled safely
- Console logging added for failed requests

This prevents:
- undefined JSON parsing errors
- assertion crashes
- misleading failure reporting

---

# Authentication Handling

Bearer tokens are securely managed using:

- `.env`
- Newman environment variables
- GitHub Secrets

Authorization format:

```http
Authorization: Bearer {{bearerToken}}
```

---

# CI/CD Integration

This project includes a GitHub Actions pipeline for continuous API testing.

### Features
- Automated test execution on push
- Secure token injection
- HTML report generation
- CI-ready workflow support

Workflow location:

```bash
.github/workflows/api-tests.yml
```

---

# GitHub Secrets Setup

Configure the following repository secret:

| Secret Name | Description |
|-------------|-------------|
| BEARER_TOKEN | Adjutor API access token |

GitHub path:

```text
Repository → Settings → Secrets and variables → Actions
```

---

# Performance Inference

Based on the executed API tests:

- Average response time ranged between 300ms–900ms
- Some requests peaked around 2.5 seconds
- Unauthorized requests returned quickly
- Intermittent connection issues were observed:
  - ECONNRESET
  - socket hang up

### Inference

- API gateway authentication is functioning correctly
- Performance measurements were partially affected by invalid authentication
- Core endpoints responded within acceptable timing thresholds under most conditions
- Some instability exists in network/session handling

---

# Recommendations

## 1. Improve Authentication Flow

- Implement token refresh automation
- Validate token expiry before execution
- Ensure environment variables load consistently

---

## 2. Improve Network Resilience

Investigate:
- ECONNRESET
- socket hang up

Recommended improvements:
- Retry mechanisms
- Stable base URL routing
- Improved TLS/session handling
- API gateway optimization

---

## 3. Add Conditional Assertions

Current improvements include:
- Safe JSON parsing
- Defensive response validation
- Error-aware assertions

Benefits:
- Prevents undefined JSON failures
- Prevents assertion crashes
- Improves reporting accuracy

---

## 4. Separate Positive and Negative Test Suites

Recommended structure:

### Positive Suite
- 200 success validations
- Performance benchmarking
- Schema validations

### Negative Suite
- 400 validations
- 401 validations
- Validation error scenarios

Benefits:
- Cleaner reporting
- Faster debugging
- Better CI visibility
- More accurate performance metrics

---

# Future Improvements

Potential enhancements:

- OAuth/token refresh automation
- Multi-environment execution
- Docker support
- Performance testing with k6
- Slack/email reporting
- Advanced HTML dashboards

---

# Author
Blessing
QA Automation Engineer Project

Built for Adjutor API Automation Assessment.