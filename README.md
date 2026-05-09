# Adjutor API Automation Suite

## Overview

This repository contains automated API test scripts for Adjutor Decisioning APIs using Postman.

## API Modules Covered

### Nigerian Country Specific Endpoints

- Get Decision Models
- Oraculi Borrower Scoring

## Test Coverage

- HTTP Status Code Validation
- Response Message Validation
- Authorization Validation
- Response Structure Validation
- Performance Validation

## Tools Used

- Postman
- Newman
- VS Code
- GitHub

## Project Structure

```text
collections/
environments/
test-data/
docs/
```

## Running Tests in Postman

1. Import the Postman collection
2. Import the Postman environment
3. Set your Bearer Token
4. Run the collection

## Running Tests with Newman

Install Newman globally:

```bash
npm install -g newman
```

Run the collection:

```bash
npm test
```

## Author

Blessing  
QA Engineer