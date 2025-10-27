# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the "spot" project - a comprehensive strategic intelligence system for Spot Pet Insurance business analysis and planning. The repository contains structured markdown files with business intelligence data, market analysis, user personas, and operational metrics.

## Repository Structure

### Core Business Intelligence Files
- `business_objectives.md` - Strategic growth targets and financial objectives
- `insurance_metrics.md` - Financial and operational performance metrics
- `market_positioning.md` - Competitive landscape and market analysis
- `product_systems.md` - Product portfolio and operational systems
- `user_personas.md` - Customer segmentation and persona analysis
- `user_journey.md` - Customer experience mapping and journey analytics
- `journey_metrics.md` - User journey performance metrics
- `growth_initiatives.md` - Strategic growth and expansion initiatives
- `partner_network.md` - Partnership and distribution strategies
- `memory_index.md` - System overview and usage guide

### BMad Framework Integration
The project uses the BMad (Business Method and Agile Development) framework extensively:

- `.bmad-core/` - Complete BMad framework with agents, tasks, templates, and workflows
- `.cursor/rules/bmad/` - IDE integration rules for BMad agents
- Multiple specialized agent personas (orchestrator, master, PM, architect, developer, QA, etc.)
- Structured workflows for both greenfield and brownfield development
- Template-driven document creation system

## BMad Agent System

The repository includes a sophisticated agent-based development system:

### Key Agents
- `bmad-orchestrator` - Master coordinator for multi-agent workflows
- `bmad-master` - Universal task executor across all domains
- Specialized roles: PM, architect, developer, QA, UX expert, analyst

### Agent Activation
Agents are activated using `@agent-name` syntax and operate with structured command systems using `*command` format.

## Working with This Repository

### Content Analysis
When analyzing business intelligence files, each document contains structured sections with:
- Performance metrics and KPIs
- Competitive analysis data
- Strategic objectives and targets
- Query examples for specific use cases

### File Relationships
The `memory_index.md` file serves as the central navigation guide, explaining the purpose and interconnections of all business intelligence files.

### BMad Workflow Integration
- Tasks are defined in `.bmad-core/tasks/`
- Templates available in `.bmad-core/templates/`
- Workflows structured in `.bmad-core/workflows/`
- Configuration managed through `.bmad-core/core-config.yaml`

## Development Approach

This is primarily a content and analysis repository rather than a traditional codebase. Focus on:
- Content analysis and insights generation
- Strategic planning and business intelligence
- Document creation using BMad templates
- Workflow orchestration through BMad agents

The BMad framework provides comprehensive tooling for document creation, business analysis, and strategic planning workflows.

Claude was used to create these files under the following prompt: 
I want to create a persistent memory system that LLMS can reference across all conversations about Spot Pet Insurance operations and that can live in an editor that 
  our team can keep up to date This system will use structured Markdown files that capture our complete pet insurance business context, including detailed user journey
   mapping and persona intelligence.

  Create these files:

  insurance_metrics.md - GWP, loss ratios, policy counts, claims data, customer acquisition costs, retention rates
  product_systems.md - coverage plans, pricing models, underwriting guidelines, reimbursement structures, policy features
  partner_network.md - Sam's Club relationship, partnerize, affiliates, distribution partnerships (AAA, employer benefits)
  growth_initiatives.md - product development roadmap, market expansion plans, technology enhancements, regulatory compliance projects
  market_positioning.md - target pet parent segments, competitive differentiation, brand messaging, digital marketing channels
  business_objectives.md - growth targets, market share goals, operational KPIs, customer satisfaction metrics
  user_journey.md - complete customer lifecycle from awareness to advocacy, touchpoint analysis, conversion funnels, retention strategies
  journey_metrics.md - specific KPIs for each journey stage, conversion rates, drop-off points, benchmark data, cohort analysis
  user_personas.md - detailed pet parent profiles, demographics, psychographics, pain points, decision-making factors, communication preferences
  memory_index.md - guide for using the pet insurance strategic system

  For each file, ask targeted questions to gather relevant pet insurance industry data and create detailed Markdown structures with clear headers, tables, and bullet 
  points that you can query for strategic advice on customer acquisition optimization, journey improvements, persona-based messaging, pricing strategies, partnership 
  development, product positioning, claims management, and retention initiatives. The system should function as an external business intelligence brain, referencing 
  actual user behavior data, conversion metrics, persona insights, and competitive positioning rather than providing generic advice. Cite sources wherever possible



