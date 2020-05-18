# Medicine scanner
## Table of contents
- [Collaborators](#collaborators)
- [Debriefing](#debriefing)

------

<a name="collaborators">
  
## Collaborators
- [Damian Veltkamp](url)
- [Leroy van Biljouw](url)

------

<a name="debriefing">
  
## Debriefing
### The client
We will build a web application for De Voorhoede.

### History
De Voorhoede is looking for a better solution for their medicine scanner. They want to see if an application that uses Machine Learning (ML) or Deep Learning (DL) and Optical Character Recognition (OCR) works better. The webapp can stay conceptual, meaning the webapp must be functional for at least 3 to 4 medicines. A large dataset is not required.

#### User Requirement List
- The app must use the registration numbers.
- The webapp must be usable for everyone, even if the user does not or cannot use the camera or webcam. A manual option to enter registration numbers is required.
- The user should be able to request the package leaflet of a medicine. A link to the leaflet is sufficent.
- The application must consist of at least a homepage, scanner page and results page. A page that show the scan history is optional and requires some extra attention to privacy.

### Main/sub Questions
#### Main question
How can the user fetch the leaflet from a medicine reliably and quickly?

#### Sub questions
- How can the webapp recognise the registration number?
- How can the webapp be used without webcam/camera?
- How can we guarantee the user privacy?
- What happens when the webapp can't find the corresponding medicine?
- What happens if information is missing?

### Resources
#### API
We'll use a rest API from De Voorhoede containing medicine information. Not all information of a medicine is available. The API has the follwoing structure:
```
{
    "id": 0,
    "registrationNumber": "RVG  121312",
    "name": "18F-FDG Hoboken 250 MBq/ml, oplossing voor injectie",
    "activeIngredient": "V09IX04 - Fludeoxyglucose [18 F]"
},
```

### Plan of action
#### Concept description
Our concept

#### Scope
Our scope

#### Planning
##### Week 1
- Create a basic functional prototype that can scan and match registration numbers from the API.
- Save JSON on the server temporarily.

<details>
<summary>Detailed planning</summary>
  
------ 
  
##### Monday
- Debriefing

##### Tuesday
- User scenario
- Persona
- Styleguide and design
 
##### Wednesday
- Boilerplate
- Templating
- Routing
- Access Camera

##### Thursday
- Read OCR docs
- First OCR test

##### Friday
- Try to match registration number with API
- Deploy on Heroku

</details>

------

#### Week 2
- Error handling
- Add leaflets
- Implement a caching strategy.

------

#### Week 3
- Finetune algorithm. Create fallbacks when the registration can not be read properly.
- Test and Improve accessibility.

------

#### Week 4
- Optimise perfomance
- Testing

------

#### Week 5
- Squash last bugs
- Last tweaks
