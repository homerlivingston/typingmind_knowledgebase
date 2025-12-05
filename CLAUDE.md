# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the "spot" project - a comprehensive strategic intelligence system for Spot Pet Insurance business analysis and planning. The repository contains structured markdown files with business intelligence data, market analysis, user personas, and operational metrics.

## Repository Structure

```
spot/
├── knowledge-base/          # Core business intelligence (TypingMind reference)
│   ├── README.md            # Navigation guide for the knowledge system
│   ├── business/            # Strategic & financial intelligence
│   │   ├── business_objectives.md
│   │   ├── growth_initiatives.md
│   │   └── market_positioning.md
│   ├── customers/           # Customer insights & journey mapping
│   │   ├── user_personas.md
│   │   ├── user_journey.md
│   │   ├── journey_metrics.md
│   │   ├── customer_engagement.md
│   │   └── customer_engagement_timing_insights.md
│   ├── products/            # Product & partnership info
│   │   ├── product_systems.md
│   │   ├── pet_status.md
│   │   └── partner_network.md
│   └── data/
│       └── data_index.md
│
├── projects/                # Active project work
│   ├── claims-flow/         # Claims experience redesign
│   ├── welcome-packet/      # Welcome packet initiative
│   ├── lapsed-billing/      # IPG billing incident recovery
│   ├── employee-benefits-deck/
│   └── geo-analysis/        # Geographic/SEO analysis
│
├── perks/                   # Spot Perks program
│   ├── strategy/            # Perks strategy docs
│   ├── experiments/         # A/B tests and results
│   └── vendor-evaluation/   # Vendor comparisons (Wildfire, Kalder, etc.)
│
├── customerio/              # Customer.io campaigns & analysis
│
├── queries/                 # Databricks SQL queries
│   └── data_exports/        # Query result exports
│
├── reference/               # Brand guidelines, legal, org info
│
├── _archive/                # Deprecated projects & files
│
├── CLAUDE.md                # This file
├── SYSTEM_INSTRUCTIONS.md   # TypingMind system prompt
└── prompt_library.md        # Reusable prompts for TypingMind
```

## Key Files

### Knowledge Base
The `knowledge-base/` folder contains the core business intelligence that powers TypingMind conversations:
- **README.md** - Central navigation guide explaining all files and their relationships
- **business/** - Strategic objectives, growth plans, market positioning
- **customers/** - Personas, journey mapping, engagement metrics
- **products/** - Product portfolio, insurance details, partnerships

### Configuration
- `SYSTEM_INSTRUCTIONS.md` - System prompt for TypingMind knowledge base
- `prompt_library.md` - Curated prompts for common analyses

## Working with This Repository

### Content Analysis
When analyzing business intelligence files, each document contains:
- Performance metrics and KPIs
- Competitive analysis data
- Strategic objectives and targets
- Query examples for specific use cases

### File Relationships
The `knowledge-base/README.md` file serves as the central navigation guide, explaining the purpose and interconnections of all business intelligence files.

## Development Approach

This is primarily a content and analysis repository rather than a traditional codebase. Focus on:
- Content analysis and insights generation
- Strategic planning and business intelligence
- Keeping knowledge base files current with latest business data
- Supporting TypingMind conversations with accurate context

## Origin

This knowledge base was created to provide LLMs with persistent memory about Spot Pet Insurance operations. The system uses structured Markdown files that capture complete pet insurance business context, including detailed user journey mapping and persona intelligence.
