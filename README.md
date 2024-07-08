# phase-1-week-1-code-challenge

## Overview

This project consists of a set of functions written in JavaScript to perform various calculations related to student grading, speed monitoring for traffic, and salary deductions. These functions include:

1. Determining a student's grade based on their mark.
2. Checking the speed of a vehicle and calculating demerit points.
3. Calculating taxable salary and various deductions to determine the net salary.

## Table of Contents

- [Getting Started](#getting-started)
- [Functions](#functions)
  - [getGrade(mark)](#getgrademark)
  - [checkSpeed(speedArg)](#checkspeedspeedarg)
  - [calculateTaxableSalary(basicSalary, benefits)](#calculatetaxablesalarybasicsalary-benefits)
  - [calculateTaxAmount(taxableSalary)](#calculatetaxamounttaxablesalary)
  - [calculateNHIFDeduction(taxableSalary)](#calculatenhifdeductiontaxablesalary)
  - [calculateNSSFContribution(taxableSalary)](#calculatenssfcontributiontaxablesalary)
  - [calculateNetSalary(basicSalary, benefits)](#calculatenetsalarybasicsalary-benefits)
- [Usage](#usage)
- [Examples](#examples)

## Getting Started

To use this project, simply copy the provided JavaScript code into your project or run it in a JavaScript environment such as Node.js or a browser console.

## Functions

### getGrade(mark)

Determines the grade based on the provided mark.

**Parameters:**
- `mark`: The mark of the student (a number between 0 and 100).

**Returns:**
- A string indicating the student's grade or an error message if the input is invalid.

### checkSpeed(speedArg)

Checks the speed of a vehicle and calculates demerit points based on the speed limit.

**Parameters:**
- `speedArg`: The speed of the vehicle.

**Returns:**
- A string indicating "OK" if the speed is within the limit, the number of demerit points, or "License suspended" if the demerit points exceed 12.

### calculateTaxableSalary(basicSalary, benefits)

Calculates the taxable salary by adding the basic salary and benefits.

**Parameters:**
- `basicSalary`: The basic salary amount.
- `benefits`: The benefits amount.

**Returns:**
- The total taxable salary.

### calculateTaxAmount(taxableSalary)

Calculates the tax amount based on the taxable salary using predefined tax slabs.

**Parameters:**
- `taxableSalary`: The taxable salary amount.

**Returns:**
- The calculated tax amount.

### calculateNHIFDeduction(taxableSalary)

Calculates the NHIF deduction based on the taxable salary using predefined NHIF rates.

**Parameters:**
- `taxableSalary`: The taxable salary amount.

**Returns:**
- The NHIF deduction amount.

### calculateNSSFContribution(taxableSalary)

Calculates the NSSF contribution based on the taxable salary.

**Parameters:**
- `taxableSalary`: The taxable salary amount.

**Returns:**
- The NSSF contribution amount.

### calculateNetSalary(basicSalary, benefits)

Calculates the net salary by considering the basic salary, benefits, and various deductions (tax, NHIF, and NSSF).

**Parameters:**
- `basicSalary`: The basic salary amount.
- `benefits`: The benefits amount.

**Returns:**
- An object containing the tax amount, NHIF deduction, NSSF amount, total deductions, and net salary.

## Usage

To use any of these functions, call them with the appropriate arguments. For example:

```javascript
console.log(getGrade(85)); // Output: The student's grade is A.
console.log(checkSpeed(80)); // Output: Points: 2

let basicSalary = 100000;
let benefits = 20000;
const netSalary = calculateNetSalary(basicSalary, benefits);
console.log(`
Tax Amount: ${netSalary.taxAmount}
NHIF Deduction: ${netSalary.nhifDeduction}
NSSF Amount: ${netSalary.nssfAmount}
Total Deductions: ${netSalary.totalDeductions}
Net Salary: ${netSalary.netSalary}
`);
```

## Examples

### Example 1: Grading

```javascript
console.log(getGrade(20)); // Output: The student's grade is E.
console.log(getGrade(90)); // Output: The student's grade is A.
```

### Example 2: Speed Check

```javascript
console.log(checkSpeed(65)); // Output: OK
console.log(checkSpeed(80)); // Output: Points: 2
console.log(checkSpeed(150)); // Output: License suspended.
```

### Example 3: Salary Calculation

```javascript
let basicSalary = 100000;
let benefits = 20000;

const netSalary = calculateNetSalary(basicSalary, benefits);
console.log(`
Tax Amount: ${netSalary.taxAmount}
NHIF Deduction: ${netSalary.nhifDeduction}
NSSF Amount: ${netSalary.nssfAmount}
Total Deductions: ${netSalary.totalDeductions}
Net Salary: ${netSalary.netSalary}
`);
```
