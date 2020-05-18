# Medicine scanner
In this course we will bundle all our newly acquired superpowers to create a webapp for a real client. We will create a webapp for De Voorhoede. They've asked us to create a completely new version of their Medicine scanner, using Machine Learning and Optical character Recognition. 

## Table of contents
- [Collaborators](#collaborators)
- [Debriefing](#debriefing)

------

<a name="collaborators">
  
## Collaborators
- [Damian Veltkamp](https://github.com/damian1997/meesterproef-1920)
- [Leroy van Biljouw](https://github.com/SqueezyDough/meesterproef-1920)

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
#### Scope
- Scan a medicine using a camera / webcam
- If the input contains an incompleted name or code, give 3 suggestions, ordered by probability
- Improve suggestions with machine learning. (Increase / decrease weight)
- Get informations manually with a text input is the camera is not available.
- Caching strategy
- Offline strategy
- Responsive layout
- Error handling

##### What we leave out
- updating the dataset when new dasta is avaiable.

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

#### Workwise
We use the SCRUM methodology and we'll use weekly sprints. Our weekly schedule looks like this:

- **Monday** Standup & checkup with your coach.
- **Wednesday** Code review with Joost and Laurens.
- **Thursday** Design review with Vasilis and Koop.
- **Friday** Testing with the client, processing feedback and create a detailed planning for next week.

##### Communication
We use Discord as our main communication tool. Github will be our platform for code discussions.

##### Git
We will collaborate on this repo. We work with a kanban board. We will create a new branch for each issue. The master is protected, which means each merge request needs to be reviewed by the other collaborator, before it can be merged with the master branche.
