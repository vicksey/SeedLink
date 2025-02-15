# SeedLink - Reviving Plants, One Seed at a Time

## Overview
SeedLink is a platform designed to combat plant extinction by encouraging individuals to plant species that are at risk. Traditional seed banking is insufficient—plants need to be actively planted and nurtured to ensure their survival. SeedLink leverages AI and community engagement to guide users in planting the right seeds in the right locations while providing emotional and financial incentives to ensure long-term commitment.

## Features

### User Experience
- **Location-Based Planting Recommendations**: Users receive AI-driven recommendations for the best plants to grow based on their location and environmental conditions.
- **Incentives for Participation**:
  - **Emotional**: Sponsor or gift a tree to loved ones.
  - **Financial**: Users earn points or monetary rewards by verifying plant survival.
- **Impact Tracking**:
  - Local and global impact data visualization.
  - AI-powered growth monitoring over time.

### Implementation
- **Web App Dashboard**: User-friendly interface for tracking progress and accessing recommendations.
- **Authentication**: Google OAuth login for secure access.
- **Seed Inventory Management**:
  - Individual organizations maintain their own inventory.
  - Data displayed in an Excel-like format.
- **User Input Data**:
  - Users provide planting date (month/year) and location.
  - Data used for future planting predictions.
- **AI-Powered Insights**:
  - **PerplexityPro**: Generates agricultural reports based on user-provided data.
  - **Mistral AI**: Analyzes seed inventory and agricultural reports to determine optimal planting strategies.
- **Interactive Map**:
  - Displays planted seeds and their progress over time.
- **Community Thread**:
  - Users can like, comment, and track plant growth progress.

## Backend Pipeline
1. **User Input Processing**
   - Users enter planting date and location.
2. **PerplexityPro Integration**
   - Generates agricultural reports tailored to the user’s location and timeframe.
3. **Mistral AI Analysis**
   - Uses the agricultural report and seed inventory data to determine the best plants for the region.
4. **Map & Growth Visualization**
   - AI tracks plant progress and displays changes over time.
5. **Community Engagement**
   - Users interact, share progress, and encourage each other.

## Impact
SeedLink fosters a community-driven approach to reviving endangered plants by combining AI-driven insights with social incentives. By empowering individuals and organizations to plant strategically, SeedLink ensures a meaningful and lasting impact on biodiversity conservation.
