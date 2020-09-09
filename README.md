# COVID-19 Cases and Unemployment by State

#### -- Project Status: Completed

## Project Objective
The purpose of this project was to better understand the relationship between COVID-19 cases and unemployment claims across different states.  During the COVID-19 pandemic, states have used decidedly different strategies to either minimize new COVID-19 cases, or keep their businesses open.  We wanted to understand, using visualizations, if cases with high numbers of unemployment claims had fewer cases, or if there was not a relationship between cases and claims.


### Methods Used
* Machine Learning
* Data Visualization
* Predictive Modeling

### Technologies
* Python
* Pandas, jupyter, scikit-learn 
* Javascript
* D3
* HTML
* CSS
* Heroku


## Project Description
I pulled data from Redfin of single-family homes that sold in the last 6 months within Portland, Oregon.  The pull was completed on August 20, 2020 so we had homes that sold February 24-August 20, 2020.  Redfin limits data pulls to 250 homes, so I needed to complete a pull for each Portland zip code to get a full dataset of Portland.  After dropping outliers and homes missing descriptive variables, we had a dataset of 2,294 homes and 12 possible predictor variables, plus the selling price. 

Our initial model included the following variables:
* Number of bedrooms
* Number of bathrooms
* Square feet of home
* Square feet of the lot
* Year the home was built

Our initial model scores were low.  I parsed the existing address variable to create several new variables, which improved the model score. These variables were:
* Westside/Eastside location – Homes on the west side of the Willamette river tend to have better views of the Cascade mountain range, but also have higher property taxes, both of which may impact selling price.
* Numbered/Alphabetical street – In Portland, numbered streets (e.g., NE 22nd) run North-South and tend to be quieter, whereas alphabetical streets (e.g, NE Halsey) run East-West and are often busier, multi-lane travel corridors. The busyness or quietness of a street could impact home value.

We initially hypothesized that there would be relationships between new COVID-19 cases and unemployment by state.  For example, as new states had surges in COVID-19 cases, lockdowns would occur and unemployment would go up.  Or states would remain locked down, keeping unmeployment high but new COVID-19 cases low. 

When we inspected the visualizations, we did not consistently see that relationship.  There were spikes in unemployment in Apri across nearly all states as shutdowns occurred. See the figures below of initial unemployment claims.
![](machine%20learning%20code/Home%20Price%20App.png)

For almost all states, unemployment stayed high (see InsuredUnemploymentRate variable in dropdown) into July 2020, as seen by the figures depicting insured unemployment rate below.
![](machine%20learning%20code/Home%20Price%20App.png)

But there were a few notable exceptions.  Florida had a large drop in their insured unemployment rate in late May (see above), and also had a subsequent jump in new COVID-19 cases in June (see below).  This example does suggest that Florida's decision to reopoen their economy, as evidenced by the drop in unemployment, may have contributed to a large rise in cases seen within the next month. 
![](machine%20learning%20code/Home%20Price%20App.png)


## Deliverables
* [Application](https://bamb-project3.herokuapp.com/)
* Visit the application linked above.   Change the variable in the drop-down menu to see how states varied over time in COVID-19 cases, deaths, and new unemployment claims. 


## Team Members

|Name     |  GibHub Handle   | 
|---------|-----------------|
|Blaine Gobler | goblebla   |
|Bryan Loy | bloy86   |
|Anton Mendoza | antonmendozaxvx  |
|Maxwell Winder | thequumulox   |

## Contact
* Bryan Loy, linkedin.com/in/bryanloy

