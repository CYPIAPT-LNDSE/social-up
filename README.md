# SocialUp

## User journey

**Goal:** To help young people manage negative feelings when using social media.  
**Stakeholder:** Teenagers / adolescents coping with low self-esteem.  
**Journey:** As a young person, when I browse social media and start feeling low, I want to receive help and advice on how to deal with my emotions effectively, and build up my self-esteem.  
**Tweet:** Finding it difficult to cope with the "perfect post"? Let SocialUp build your resilience on social media.  

## User stories

**As an** adolescent  
**I would like to** keep track of how much time I'm spending on a social media page  
**So that** I can make a mindful decision on whether to continue browsing.  

**As an** adolescent browsing social media and feeling low  
**I would like to** have easy access to a source of help  
**So that**  I am immediately able to manage my feelings.  

**As an** adolescent browsing social media  
**I would like to** have access to a fact sheet about self-esteem  
**So that** I can check the validity of some of my negative beliefs.  

**As an** adolescent browsing social media and feeling low  
**I would like to** see testimonials from my peers about the effectiveness of CBT exercises on self-esteem  
**So that** I am reassured that they could be useful for me.

**As an** adolescent browsing social media and feeling low  
**I would like to** assess my feelings before and after I complete a CBT exercise  
**So that** I can be provided with suitable advice and information.

**As an** adolescent browsing social media and feeling low  
**I would like to** be given a list of suggestions for exercises that would help me with my self-esteem  
**So that** I can try them out and improve my self-esteem.

**As an** adolescent browsing social media and feeling low  
**I would like to** be guided through each exercise in a friendly way  
**So that** I am motivated to follow it through to completion.

**As an** adolescent browsing social media and feeling low  
**I would like to** be able to personalise what help and advice is given to me  
**So that** I can address my specific feelings and concerns.

## Project plan

### Monday

- Research technical aspects and constraints
- Create README
- Create user journey & stories
- Design app flow & storyboards

### Tuesday

- Design app flow & storyboards
- Decide on fonts & colours
- Website layout
- Graphic design
- Mock content

### Wednesday
- Animations
- Refine styling
- Check app flow and refactor
- Mock Chrome extension

### Thursday
- Deploy on GitHub pages
- Fix bugs
- Prepare demo for presentation

## Design decisions

#### Fonts
- Body text: Alegreya Sans (3 weights)
- Headings: Gloria Hallelujah
- Fallbacks: Sans-Serif, Helvetica

#### Colour palette
- color1: hsla(0%, 0%, 99%, 1);
- color2: hsla(231%, 80%, 80%, 1);
- color3: hsla(30%, 91%, 56%, 1);
- color4: hsla(163%, 100%, 33%, 1);
- color5: hsla(211%, 56%, 43%, 1);

## Technical decisions

### Platform 
- To ensure immediacy, the app has to be fully integrated with the social media platform, which is Facebook for the prototyping stage.
- A Chrome extension fulfills the aspect of immediacy and ensures a large user base (74% of desktop users browse on Chrome).
- Social media usage is higher on mobile than on desktop for adolescents. However, a mobile app that interacts directly with the social media app is technically very difficult to develop on Android and not possible to build on iOS. 

### Tech stack
- Front-end: HTML, CSS, Bootstrap,  JavaScript   
- Back-end: Hapi, Handlebars templating, PostgreSQL, OAuth  
- Chrome extension

## Future
### MVP development
- Integrate suggestions and feedback from user testing
- Collect CTB content (resources, facts, exercises) with the help of the product owner
- Explore personalisation options (to be discussed with the product owner)
- Add user authentication options
- Build Chrome extension and deploy

### Long-term scalability 
- Starting with piloting SocialUp on Google Chrome only, the next steps would be to expand to Firefox and Safari.
- A native app on Android is an option for mobile devices. 
