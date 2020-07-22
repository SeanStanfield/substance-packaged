"use strict";

let mainContent = document.querySelector("#mainContent");
let caseTitle = document.querySelector("#studyTitle");
let caseBody = document.querySelector("#studyBody");
const pageNums = document.querySelectorAll(".page-num");
const arrLeft = document.querySelector(".arr-left");
const arrRight = document.querySelector(".arr-right");
const arrows = document.querySelectorAll(".arr");
let currentPage = document.querySelector(".current-page");

caseTitle.textContent = localStorage.getItem("pressedTitle");

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  loadCaseContents();
});

function loadCaseContents() {
  let storageRef = localStorage.getItem("linkPressed");
  switch (storageRef.toLowerCase()) {
    case "innovation b2b":
      caseTitle.textContent = "Fusion Days B2B Series";
      caseBody.innerHTML = `<p>We were approached by a major Logistics company that felt it was losing
       out in the small business market and wanted to improve their offer via innovation rather than price
      .</p>
      <p>The Innovation Team were very keen to remain involved through the process. Interacting with small business owners and online sellers we designed a speedy NPD research programme. Collaboration and engagement fuelled accelerated thinking and stopped the project losing momentum  
      .</p>
      <p>Six-months later one of the ideas was successfully introduced and did indeed help improve their performance in the small business sector!
      </p>
      <p>See it. Live it. Test it. Do it</p>`;

      break;
    case "innovation fmcg":
      caseTitle.textContent = "Innovation Fusion Days FMCG";
      caseBody.innerHTML = `<p>The Category Team was under time pressure to deliver new product ideas. They wanted to have a more ‘hands on experience with their customers but one that produced actionable results.
      </p>
      <p>We therefore devised for them a series of Fusion Days.  These blended consumer co-creation sessions with client workshop sessions. Initially to better understand needs – then to generate a wide range of possible products  - and finally to refine these down to a few realistic possibilities. The team members then presented the final concepts to consumers in a Dragon’s Den’ style pitch!
      </p>
      <p>After just 2 days the Category Team had achieved a far greater understanding of their customers and developed several product ideas with real potential that they could confidently drive forward. 
      </p>`;

      break;
    case "sensory food":
      caseTitle.textContent = "Tacticle Dynamics Food";
      caseBody.innerHTML = `<p>Our client wanted to know if the consumer could differentiate blind between 10 different products on attributes such as smell, texture and colour. And did they have any kind of meaningful preference between them on these attributes.
      </p><p>Given the complexity of managing respondents testing 10 different products at the same time, we created a central location approach where we could control the process and utilise a variety of research approaches and techniques. Respondents undertook the sensory exercises on an individual basis utilising spatial mapping techniques and then a spatial ranking of preference
      </p><p>The qualitative output combined with the quantitative mapping and preference data uncovered how important certain seemingly secondary product features were to the overall product perceptions and brand choice.
      </p>`;
      break;
    case "branding fmcg":
      caseTitle.textContent = "Brand Stretch FMCG";
      caseBody.innerHTML = `<p>Our client operated in a market which was not known for its brand innovation. They had had little success in transferring their strong brand values to other product categories
      </p><p>Through the use of creative immersion sessions and utilising our unique Adoption model we were able to measure where the brand had most potential for connection. What did the brand gain and lose by entering into specific territories 
      </p><p>The project identified the relative weight of the 4x A’s; Adopt/Adapt/Adjust/Alter that were required to successfully enter new categories
      </p>`;
      break;
    case "equity telco":
      caseTitle.textContent = " Quality Perceptions - Telco";
      caseBody.innerHTML = `<p>Our client was concerned that they had reached a stage where product features were having decreasing value to the consumer. Working with the marketing teams we set about understanding, at a truly granular level, which product and service features had value and drove equity in the brand. What did each element actually contribute in terms of allowing SKU’s to compete and ideally, positively differentiate themselves from the competition.
      </p><p>An extensive programme of research was conducted across several countries to identify all the attributes that appeared to contribute towards consumer quality perceptions
      </p><p>Client was able to prioritise SKU’s, change marketing messages and tailor the range to each domestic market
      </p>`;
      break;
    case "ethno safari":
      caseTitle.textContent = "Client Safari - FMCG";
      caseBody.innerHTML = `<p>We had already been working with the client’s International Task Force exploring the global future of Value Brands, when the desire to get beyond the presentations and get down and dirty with some customers emerged.
      </p><p>They saw us as their ideal partner for this exercise because we have the hands on experience with both senior managers and customers to successfully bridge the gap between them. The key was to create an experience that the members of the Task Force found challenging but enjoyable and critically, actually contributed something to their future thinking. 
      </p><p>Working round issues such as English not being the first language of many of the participants, we came up with a varied programme of customer interactions. Following the ethnographic ‘field’ visits with customers we then brought everyone together for an evening of communal speed dating where the client could quiz all the customers taking part.
      </p>`;
      break;
    case "ethno tobacco":
      caseTitle.textContent = "Ethnographic Deep Dive - Tobacco";
      caseBody.innerHTML = `<p>In a commodity market where the user experience is habitual and intuitive traditional research methods do not always cut it. The consumer cannot always articulate what they do and why they do it.
      </p><p>Ethnography enables us to observe the consumer in their own world. Taking the research into the different environments rather than consumers post rationalising their behaviour in a sterile ‘research studio’ format.
      </p><p>We designed a multi-disciplined approach that involved observation, in-situ mobile data collection and in-home follow up sessions to truly unpack the ingrained consumer attitudes. Only by ‘being there’ was it possible to break into and unlock the consumer mindset .
      </p>`;
      break;
    case "ethno financial":
      caseTitle.textContent = "Ethnographic Deep Dive – Financial Services";
      caseBody.innerHTML = `<p>Every few years it is common for a client to undertake a reassessment of their category and ensure the rules of engagement still apply. On this occasion our client wanted to understand the deeper meaning and consumer interpretation of the notion of ‘Loyalty & Reward’ .
      </p><p>The research was less about products and more about the emotional engagement and trigger points people have with their inner self. How, when and why do people feel committed and the conscious and unconscious factors that influence these motivations.
      </p><p>This project required a lot of projective and enabling techniques to understand the consumer psyche. The insight from the study created a potential new positioning space for future development.
      </p>`;
      break;
    case "customer moments of truth":
      caseTitle.textContent = "Moments of Truth – Financial Services";
      caseBody.innerHTML = `<p>Our client had spent a lot of money over a long period of time monitoring their customer service scores. Within the business these had taken on almost biblical importance and were used as a critical measure of company performance.
      </p><p>There were growing concerns over whether what was being measured was not necessarily what really made the difference to a customer, particularly when it came to the crunch moments in the relationship. A three-stage project was implemented to explore the key customer touchpoints – understand the steps within each interaction – and finally identify the critical ‘Moment of Truth’ where the customer/brand relationship could hang in the balance.
      </p><p>The results were a revelation for the management responsible for customer service. Many of the traditional metrics that had gained currency over the years turned out to be of minor concern to customers. The key, particularly to customer retention, was recognising the real ‘Moments’ of customer vulnerability and making the right response in that moment.
      </p>`;
      break;
    case "buying habits":
      caseTitle.textContent = "Customer Experience Buying Habits";
      caseBody.innerHTML = `<p>As consumer attitudes towards snacking and healthy eating was evolving, our snack food client wanted to assess the extent to which the ‘winds of change’ were real or just a passing phase.
      </p><p>We built a programme of research that encompassed both the shopper and user perspectives and identified the triggers and barriers for each. Did pester power still play a role in the buying decision and how tightly controlled was the modern day family unit when it came to snacks and treats?
      </p><p>The research unpacked the Power Drivers of decision making and enabled the company to feel confident that not all consumers are influenced by media stories. On this occasion the winds of change were not gale force!
      </p>`;
      break;
    case "user experience online":
      caseTitle.textContent = "Online Purchasing – Financial Services";
      caseBody.innerHTML = `<p>Our Financial client was making their first move into Online Home Insurance and had made an initial attempt at a customer interface.  Their initial thinking was to go straight to Quantitative but fortunately they were persuaded to start with a few one-to-one depths where we could hold the respondent’s hand and members of the marketing team could observe the carnage! 
      </p><p>As can often be the case in heavily regulated markets, the initial design was a disjointed amalgam of what the marketing team wanted and what the Legal Dept demanded. The result was that navigating the site and completing all the information was a nightmare for the average person.
      </p><p>Eventually after much revision, the website and the online process were assessed by a large sample of current and prospective customers.  The results in terms of easy to navigate – easy to complete – covered everything necessary – were extremely positive and the client now has a profitable online Home Insurance channel
      </p>`;
      break;
    case "home usage test":
      caseTitle.textContent = "Home Usage Test – Tobacco";
      caseBody.innerHTML = `<p>Our client wished to test 4 different product variants with a key, but difficult (& expensive) to find segment of consumers.  Therefore, we needed each consumer to test all 4x products for an extended period in their home environment. But we needed to be careful the respondent understood the task in hand and did not mix up the testing rotation.
      </p><p>Respondents were therefore recruited, personally briefed and handed the first two products. After trial and completion of the first questionnaire, only then did we hand over the second two products.
      </p><p>In this way the quality and integrity of the research was enhanced. As a consequence, the results produced a significant preference for one of the product variants and also provided guidance for a couple of minor product enhancements that contributed to a successful launch.
      </p>`;
      break;
    case "spam utility":
      caseTitle.textContent = "Communications – Utility";
      caseBody.innerHTML = `<p>From time to time all that is required is a simple reality check. A quick and cost effective study to demonstrate to senior stakeholders that many consumers do not have the love and affection towards a product or service in the same way they do!
      </p><p>On this occasion, we were tasked to evaluate the messaging of a proposed new insurance policy. Did the consumer notice the differences from the competition, did they understand the benefits etc.  
      </p><p>Of course, in the real world, many consumers pay little attention to the detail. This was borne out in the small number of interviews we conducted where we filmed people opening the DM material and captured responses and reaction.
      </p>
      <p>Needless to say, a 2 minute video edit of ten respondents told the client everything they needed to know! 
      </p>`;
      break;
    case "pack design":
      caseTitle.textContent = " Pack Design - Vaping ";
      caseBody.innerHTML = `<p>Following a phase of extensive brand and creative research 4x Design routes were put forward to be examined across eight International markets. Key questions needed to be answered; Could one pack design be used at a Global level? How did each design execution resonate within each market? Was a sub-brand needed in specific markets?
      </p><p>Owing to the global nature of the research it was paramount that the process followed a structured format whilst allowing for local cultural differences to be explored and the nuances that impacted on appeal understood.
      </p><p>Indeed. This project demonstrated that universal approval is very hard to come by!  Polarisation is common. It was our role to interpret and communicate the findings in such a way that the route of least resistance is often the way forward rather than a radical creative device that is loved by the few and disliked by the many. Sometimes the clichés are true – evolution not revolution.
      </p>`;
      break;
    case "relationships retail":
      caseTitle.textContent = "Trade Attitudes - Retail";
      caseBody.innerHTML = `<p>The CTN market was becoming an increasingly important channel for our client’s key brands. But the plethora of products available and the desire of the shop owner to try and stock everything made the CTN channel a crowded and confusing fixture.
      </p><p>We undertook a series of in-depth trade journeys with CTN owners. Accompanying them on their purchasing trips to ‘Cash and Carry’ outlets we identified how they made their often irrational purchasing decisions and how and why they bought and then displayed products in a certain way.
      </p><p>The client used the research findings to provide evidence to CTN owners that a reduced range and provision of more quality brands actually increased footfall and revenue for all parties .
      </p>`;
      break;

    default:
      break;
  }
  console.log(storageRef.toLowerCase());
  document.querySelector(".current-link").classList.remove("current-link");

  document
    .querySelector(`[data-article= "${storageRef.toLowerCase()}"]`)
    .classList.add("current-link");
}

pageNums.forEach((number) => {
  number.addEventListener("click", () => {
    SwapPages(number.textContent);
    number.classList.add("current-page");
  });
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    console.log(e.target.dataset.value);
    let currentList = document.querySelector(".current-list");
    let currentPage = document.querySelector(".current-page");
    let currentNum = currentPage.textContent;
    reducedNum = parseInt(currentNum, 10) + parseInt(e.target.dataset.value);

    if (reducedNum > 0 && reducedNum < 4) {
      console.log(reducedNum + " is reduced num");
      currentList.classList.remove("current-list");
      currentPage.classList.remove("current-page");
      let wantedList = document.querySelector(`#list${reducedNum}`);
      wantedList.classList.add("current-list");
      let wantedPage = document.querySelector(`#page${reducedNum}`);
      wantedPage.classList.add("current-page");
    }
  });
});

function SwapPages(targetNumber) {
  let currentList = document.querySelector(".current-list");
  let wantedList = document.querySelector(`#list${targetNumber}`);
  if (wantedList != null) {
    currentList.classList.remove("current-list");
    wantedList.classList.add("current-list");

    currentPage = document.querySelector(".current-page");
    currentPage.classList.remove("current-page");
  }
}

let CaseLinks = document.querySelectorAll(".list-set .link");

CaseLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    document.querySelector(".current-link").classList.remove("current-link");
    link.classList.add("current-link");
    let article = e.target.dataset.article;
    localStorage.setItem("linkPressed", article);
    caseTitle.style.opacity = 0;
    caseBody.style.opacity = 0;
    caseBody.addEventListener("transitionend", () => {
      loadCaseContents();
      caseBody.style.opacity = 1;
      caseTitle.style.opacity = 1;
    });
  });
});
