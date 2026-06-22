export const chapters = [
  {
    id: "1",
    module: "Module 1",
    title: "Introduction to Systems Analysis and Design",
    textbookChapter: "Textbook Chapter 1",
    summary: "Information systems, business systems, development methods, and the SDLC.",
    questions: [
      { type: "mc", prompt: "Which set lists the five core components of an information system?", options: ["Hardware, software, data, processes, and people", "Input, output, profit, risk, and schedule", "Servers, clients, routers, clouds, and portals", "Planning, analysis, design, coding, and sales"], answer: 0, explanation: "An information system combines hardware, software, data, processes, and people." },
      { type: "mc", prompt: "Which system is vital to a company's operations and cannot fail without serious impact?", options: ["Legacy system", "Mission-critical system", "Horizontal system", "User productivity system"], answer: 1, explanation: "Mission-critical systems are essential to business operations." },
      { type: "mc", prompt: "Which e-commerce category describes transactions between two companies?", options: ["B2C", "C2C", "B2B", "G2C"], answer: 2, explanation: "B2B means business-to-business." },
      { type: "mc", prompt: "What is the main deliverable of the systems planning phase?", options: ["A physical database", "A preliminary investigation report", "A completed user interface", "A maintenance request"], answer: 1, explanation: "Planning evaluates the request and feasibility, producing the preliminary investigation report." },
      { type: "tf", prompt: "Information is raw, unprocessed facts, while data is the transformed output.", answer: false, explanation: "This is reversed: data is raw facts; information is transformed data." },
      { type: "tf", prompt: "A legacy system is an older system that may still support important business operations.", answer: true, explanation: "Legacy systems are older technologies or applications that remain in use." },
      { type: "tf", prompt: "The waterfall model normally allows phases to proceed in a structured sequence with defined deliverables.", answer: true, explanation: "Waterfall organizes development into sequential phases and deliverables." },
      { type: "short", prompt: "Name the five SDLC phases presented in the module.", keywords: [["planning"], ["analysis"], ["design"], ["implementation"], ["security", "support"]], answerText: "Systems planning, systems analysis, systems design, systems implementation, and systems security and support.", explanation: "All five phases are required." },
      { type: "short", prompt: "What is a stakeholder?", keywords: [["person", "individual", "group"], ["interest", "affected", "invested"]], answerText: "A person or group that has an interest in, or is affected by, the information system.", explanation: "Stakeholders care about or are affected by the system and its outcomes." },
      { type: "short", prompt: "Briefly distinguish system software from application software.", keywords: [["hardware", "operating", "platform"], ["user", "task", "business", "application"]], answerText: "System software manages the hardware/platform; application software performs user or business tasks.", explanation: "The distinction is platform control versus task-focused functionality." }
    ]
  },
  {
    id: "2",
    module: "Module 2",
    title: "Analyzing the Business Case",
    textbookChapter: "Textbook Chapter 2",
    summary: "Strategic alignment, systems requests, feasibility, priorities, and preliminary investigation.",
    questions: [
      { type: "mc", prompt: "Strategic planning normally begins with which organizational statement?", options: ["A test plan", "A mission statement", "A data dictionary", "A purchase order"], answer: 1, explanation: "The mission statement anchors goals, objectives, and project alignment." },
      { type: "mc", prompt: "Which feasibility question asks whether expected benefits outweigh costs?", options: ["Technical", "Operational", "Economic", "Schedule"], answer: 2, explanation: "Economic feasibility evaluates whether a proposal is cost-effective." },
      { type: "mc", prompt: "Which item is NOT one of the four SWOT categories?", options: ["Strengths", "Workflow", "Opportunities", "Threats"], answer: 1, explanation: "SWOT stands for strengths, weaknesses, opportunities, and threats." },
      { type: "mc", prompt: "Why can a systems review committee prioritize requests better than one individual?", options: ["It eliminates the need for evidence", "It supplies a broader viewpoint and reduces individual bias", "It guarantees immediate decisions", "It only accepts mandatory projects"], answer: 1, explanation: "A cross-functional committee adds perspective and reduces the effect of one person's bias." },
      { type: "tf", prompt: "A discretionary project is one management has no choice but to implement.", answer: false, explanation: "A non-discretionary project is mandatory; a discretionary project involves management choice." },
      { type: "tf", prompt: "A business case should consider the risks of doing the project and the risks of not doing it.", answer: true, explanation: "Both action and inaction risks belong in the business case." },
      { type: "tf", prompt: "Operational feasibility focuses mainly on whether the required hardware and technical expertise exist.", answer: false, explanation: "That is technical feasibility. Operational feasibility concerns user needs and organizational fit." },
      { type: "short", prompt: "Name the four main feasibility dimensions used to assess a systems request.", keywords: [["technical"], ["operational"], ["economic"], ["schedule", "time"]], answerText: "Technical, operational, economic, and schedule feasibility.", explanation: "A viable request must be practical across all four dimensions." },
      { type: "short", prompt: "What is the purpose of a business case?", keywords: [["justify", "worth", "decision"], ["benefit", "cost", "risk", "alignment"]], answerText: "It explains and justifies why a proposed project is worth pursuing by assessing benefits, costs, risks, and business alignment.", explanation: "A business case supports an informed go/no-go decision." },
      { type: "short", prompt: "Give two common reasons for submitting a systems request.", keywords: [["service", "product", "performance", "information", "control", "cost"], ["service", "product", "performance", "information", "control", "cost"]], minimumDistinct: 2, answerText: "Any two of: improved service, support for new products/services, better performance, more information, stronger controls, or reduced costs.", explanation: "The response needs two distinct business drivers." }
    ]
  },
  {
    id: "4",
    module: "Module 3",
    title: "Requirements Engineering",
    textbookChapter: "Textbook Chapter 4",
    summary: "Requirement types, fact-finding, elicitation, modeling, and quality checks.",
    questions: [
      { type: "mc", prompt: "Which requirement describes something the system must do?", options: ["Functional requirement", "Transition requirement", "Constraint log", "Business policy"], answer: 0, explanation: "Functional requirements specify system behavior or capabilities." },
      { type: "mc", prompt: "Which is a non-functional requirement?", options: ["Calculate a student's GPA", "Send a payment confirmation", "Respond within three seconds", "Create a customer record"], answer: 2, explanation: "Response time is a performance quality constraint, not a business behavior." },
      { type: "mc", prompt: "Which modeling technique uses an ERD?", options: ["Process modeling", "Data modeling", "Object modeling", "Interface modeling"], answer: 1, explanation: "Entity-relationship diagrams represent business data requirements." },
      { type: "mc", prompt: "Which elicitation technique is best for collecting standardized responses from many geographically dispersed users?", options: ["Questionnaire", "Direct observation", "Document sampling", "One-on-one interview"], answer: 0, explanation: "Questionnaires efficiently gather consistent input from a large audience." },
      { type: "tf", prompt: "Transition requirements are temporary capabilities needed to move from the current state to the future state.", answer: true, explanation: "Examples include data conversion, training, and business continuity during change." },
      { type: "tf", prompt: "Requirements verification asks whether the documented requirements are correct, complete, and testable.", answer: true, explanation: "Verification checks requirement quality; validation checks that they represent stakeholder needs." },
      { type: "tf", prompt: "An analyst should ask only what the current system does, not what it could or should do.", answer: false, explanation: "Fact-finding must distinguish the current state from possible and desired future states." },
      { type: "short", prompt: "Distinguish a functional requirement from a non-functional requirement.", keywords: [["do", "behavior", "function", "capability"], ["quality", "constraint", "performance", "security", "condition"]], answerText: "A functional requirement states what the system must do; a non-functional requirement states a quality, condition, or constraint under which it must operate.", explanation: "Behavior and quality constraints serve different purposes." },
      { type: "short", prompt: "Name three fact-finding techniques.", keywords: [["interview", "questionnaire", "observation", "sampling", "research", "meeting", "workshop", "site visit"], ["interview", "questionnaire", "observation", "sampling", "research", "meeting", "workshop", "site visit"], ["interview", "questionnaire", "observation", "sampling", "research", "meeting", "workshop", "site visit"]], minimumDistinct: 3, answerText: "Any three of: interviews, questionnaires, observation, document sampling, research/site visits, meetings, or workshops.", explanation: "Analysts combine techniques to gather reliable evidence." },
      { type: "short", prompt: "What is requirements discovery (elicitation)?", keywords: [["identify", "extract", "discover", "gather"], ["requirement", "need"], ["stakeholder", "user"]], answerText: "The process and techniques used to identify or extract system needs and requirements from stakeholders and the user community.", explanation: "Elicitation discovers what stakeholders need from the solution." }
    ]
  },
  {
    id: "5",
    module: "Module 4",
    title: "Data and Process Modeling",
    textbookChapter: "Textbook Chapter 5",
    summary: "Swimlanes, DFDs, balancing, data dictionaries, decision tables, and process descriptions.",
    questions: [
      { type: "mc", prompt: "Which DFD symbol represents a person, organization, or system outside the system boundary?", options: ["Process", "Data store", "External entity", "Data flow"], answer: 2, explanation: "An external entity is a source or destination outside the modeled system." },
      { type: "mc", prompt: "What does a context diagram show?", options: ["Every low-level process", "The whole system as one process and its external data flows", "Only database tables", "A program's decision logic"], answer: 1, explanation: "The context diagram defines the system boundary with one process and external entities/flows." },
      { type: "mc", prompt: "What is DFD balancing?", options: ["Giving every process the same size", "Preserving input and output data flows between parent and child diagrams", "Using equal numbers of entities and stores", "Sorting processes alphabetically"], answer: 1, explanation: "A decomposed diagram must preserve the parent's external inputs and outputs." },
      { type: "mc", prompt: "Which tool is best for showing all combinations of conditions and resulting actions?", options: ["Decision table", "Data dictionary", "Context diagram", "Swimlane model"], answer: 0, explanation: "Decision tables systematically map condition combinations to actions." },
      { type: "tf", prompt: "A data flow can move directly from one data store to another without a process.", answer: false, explanation: "DFD data must pass through a process when moving between stores or external entities." },
      { type: "tf", prompt: "A swimlane model helps identify which role or department is responsible for each task.", answer: true, explanation: "Swimlanes group activities by responsible participant." },
      { type: "tf", prompt: "A logical model describes what the system does without committing to implementation technology.", answer: true, explanation: "Logical models focus on business requirements; physical models describe implementation." },
      { type: "short", prompt: "Name the four basic DFD elements.", keywords: [["process"], ["data flow", "flow"], ["data store", "store"], ["external entity", "entity", "source", "sink"]], answerText: "Processes, data flows, data stores, and external entities (sources/sinks).", explanation: "These four elements describe transformation, movement, storage, and external interaction." },
      { type: "short", prompt: "What is the purpose of a data dictionary?", keywords: [["define", "describe", "document"], ["data", "element", "flow", "store"]], answerText: "It centrally defines and documents data elements, structures, flows, and stores used by the system.", explanation: "A data dictionary keeps data definitions consistent across models." },
      { type: "short", prompt: "Distinguish a context diagram from a Diagram 0 DFD.", keywords: [["single", "one process", "boundary"], ["major process", "decompose", "data store"]], answerText: "A context diagram shows the entire system as one process and its external interactions; Diagram 0 decomposes it into major internal processes, flows, and data stores.", explanation: "Diagram 0 expands the single context process while preserving its external flows." }
    ]
  },
  {
    id: "6",
    module: "Module 5",
    title: "Object Modeling",
    textbookChapter: "Textbook Chapter 6",
    summary: "Objects, classes, methods, messages, relationships, and UML diagrams.",
    questions: [
      { type: "mc", prompt: "Which term describes a characteristic of an object?", options: ["Method", "Attribute", "Message", "Use case"], answer: 1, explanation: "Attributes store the characteristics or state of an object." },
      { type: "mc", prompt: "What is a specific member of a class called?", options: ["Actor", "Instance", "Method", "Package"], answer: 1, explanation: "An instance is one concrete object belonging to a class." },
      { type: "mc", prompt: "Which UML diagram shows time-ordered messages exchanged among objects?", options: ["Class diagram", "Use case diagram", "Sequence diagram", "State diagram"], answer: 2, explanation: "Sequence diagrams emphasize interaction order over time." },
      { type: "mc", prompt: "What does inheritance allow?", options: ["A subclass to acquire attributes and methods from a parent class", "A data store to bypass a process", "Every object to expose its internals", "A message to have only one implementation"], answer: 0, explanation: "Inheritance supports reuse by passing parent features to specialized subclasses." },
      { type: "tf", prompt: "UML prescribes one mandatory systems development methodology.", answer: false, explanation: "UML is a standard notation; it does not prescribe a development method." },
      { type: "tf", prompt: "Encapsulation packages an object's data and methods behind a defined interface.", answer: true, explanation: "Encapsulation treats the object's internals as a black box." },
      { type: "tf", prompt: "Polymorphism means the same message can cause different behavior in different objects.", answer: true, explanation: "Objects can interpret the same message according to their own implementations." },
      { type: "short", prompt: "Distinguish a class from an instance.", keywords: [["class", "group", "template", "blueprint"], ["instance", "specific", "member", "object"]], answerText: "A class is a category or blueprint for similar objects; an instance is one specific member of that class.", explanation: "The class defines shared structure; the instance is a concrete object." },
      { type: "short", prompt: "What is a message in object-oriented analysis?", keywords: [["command", "request", "signal"], ["method", "behavior", "action"]], answerText: "A command or request sent to an object that tells it to perform a method.", explanation: "Messages trigger object behavior without exposing the internal implementation." },
      { type: "short", prompt: "What does a use case diagram communicate?", keywords: [["actor", "user", "external"], ["interaction", "goal", "function", "system"]], answerText: "It shows external actors and the system functions or goals (use cases) with which they interact.", explanation: "Use case diagrams define system behavior from an external user's perspective." }
    ]
  },
  {
    id: "7",
    module: "Module 7",
    title: "Development Strategies",
    textbookChapter: "Textbook Chapter 10 (topic mapping)",
    summary: "Web-based development, cloud services, outsourcing, acquisition, and strategy selection.",
    questions: [
      { type: "mc", prompt: "Which statement best describes Software as a Service (SaaS)?", options: ["Software is installed and maintained separately on every user's machine", "A provider hosts an application that users access over the Internet, usually by subscription", "A company must build all software internally", "A vendor supplies only physical servers"], answer: 1, explanation: "SaaS applications run on provider infrastructure and are accessed online." },
      { type: "mc", prompt: "In which outsourcing fee model does cost vary with users or workstations?", options: ["Fixed fee", "Subscription", "Usage-free", "Capital-only"], answer: 1, explanation: "Subscription pricing varies with the service level, users, or workstations." },
      { type: "mc", prompt: "What is an RFP primarily used for?", options: ["Requesting vendor proposals for a defined system or service", "Documenting object attributes", "Balancing a DFD", "Recording test defects"], answer: 0, explanation: "A request for proposal invites vendors to recommend and price solutions against requirements." },
      { type: "mc", prompt: "Which is a common reason to outsource?", options: ["To guarantee zero risk", "To access specialized expertise or reduce costs", "To eliminate contracts", "To avoid defining requirements"], answer: 1, explanation: "Outsourcing can supply expertise, scale, or cost advantages, but it does not remove risk." },
      { type: "tf", prompt: "Web-based systems commonly introduce more complex security concerns than systems isolated on a private company network.", answer: true, explanation: "Internet exposure expands access paths and security responsibilities." },
      { type: "tf", prompt: "With SaaS, the customer is normally responsible for maintaining the provider's application servers.", answer: false, explanation: "The SaaS provider operates and maintains the hosted application infrastructure." },
      { type: "tf", prompt: "Offshoring always means hiring a third-party foreign vendor.", answer: false, explanation: "A company can offshore its own operations; offshore outsourcing specifically uses a third party abroad." },
      { type: "short", prompt: "Distinguish offshoring from offshore outsourcing.", keywords: [["own", "company", "employees", "operation"], ["third party", "vendor", "contract"]], answerText: "Offshoring relocates the company's own operation to another country; offshore outsourcing contracts a third-party provider in another country.", explanation: "The distinction is ownership and control of the foreign operation." },
      { type: "short", prompt: "Give two evaluation factors when selecting a development strategy or vendor.", keywords: [["cost", "support", "security", "experience", "reliability", "performance", "scalability", "requirement", "timeline", "risk"], ["cost", "support", "security", "experience", "reliability", "performance", "scalability", "requirement", "timeline", "risk"]], minimumDistinct: 2, answerText: "Any two relevant factors, such as requirements fit, total cost, vendor experience, support, security, reliability, scalability, timeline, or risk.", explanation: "Selection should compare evidence across business and technical criteria." },
      { type: "short", prompt: "What is cloud computing?", keywords: [["remote", "provider", "data center", "server"], ["internet", "network"], ["resource", "compute", "storage", "software"]], answerText: "The delivery of shared computing resources—such as servers, storage, or software—from provider-operated remote infrastructure over a network or the Internet.", explanation: "Cloud computing shifts infrastructure operation to shared remote resources." }
    ]
  },
  {
    id: "8",
    module: "Module 8",
    title: "User Interface Design",
    textbookChapter: "Textbook Chapter 7 (topic mapping)",
    summary: "Usability, HCI, interface guidelines, input/output, accessibility, and controls.",
    questions: [
      { type: "mc", prompt: "Which interface design principle reduces the user's learning effort across screens?", options: ["Consistency", "Maximum density", "Hidden feedback", "Random navigation"], answer: 0, explanation: "Consistent layouts, language, and controls make interfaces predictable." },
      { type: "mc", prompt: "Why should a system provide immediate feedback after a user action?", options: ["To increase data-entry steps", "To confirm that the action was received and show its result", "To replace validation", "To prevent accessibility"], answer: 1, explanation: "Feedback keeps users informed about system status and outcomes." },
      { type: "mc", prompt: "Which control best helps prevent invalid data at the point of entry?", options: ["Input validation", "A longer report", "Batch printing", "A hidden menu"], answer: 0, explanation: "Validation detects missing, malformed, or out-of-range input before processing." },
      { type: "mc", prompt: "Which practice most directly supports accessibility?", options: ["Using color alone to communicate errors", "Providing keyboard operation and meaningful labels", "Removing focus indicators", "Using low-contrast text"], answer: 1, explanation: "Keyboard access and semantic labels support users with varied abilities and assistive technologies." },
      { type: "tf", prompt: "A good interface should use technical jargon even when users do not know it.", answer: false, explanation: "Interface language should match the user's knowledge and business vocabulary." },
      { type: "tf", prompt: "Users should be able to reverse or recover from actions when practical.", answer: true, explanation: "Undo, confirmation, and recovery reduce the cost of human error." },
      { type: "tf", prompt: "Effective interface design considers both human-computer interaction and business requirements.", answer: true, explanation: "A usable interface must support people while accomplishing required business tasks." },
      { type: "short", prompt: "What is human-computer interaction (HCI)?", keywords: [["human", "user", "people"], ["computer", "system", "technology"], ["interaction", "use", "design"]], answerText: "The study and design of how people interact with computer systems and interfaces.", explanation: "HCI applies knowledge about people to the design of usable technology." },
      { type: "short", prompt: "Name two characteristics of a well-designed error message.", keywords: [["clear", "specific", "plain", "polite"], ["correct", "recovery", "action", "solution", "location"]], answerText: "It should clearly and specifically explain the problem and tell the user how to correct or recover from it.", explanation: "Useful errors describe both what happened and what the user can do next." },
      { type: "short", prompt: "Why is consistency important in user interface design?", keywords: [["predict", "learn", "familiar"], ["error", "effort", "efficient", "cognitive"]], answerText: "Consistency makes behavior predictable, reduces learning and cognitive effort, and helps prevent errors.", explanation: "Repeated conventions let users transfer knowledge from one part of the system to another." }
    ]
  },
  {
    id: "10",
    module: "Module 8",
    title: "System Architecture",
    textbookChapter: "Textbook Chapter 9 (topic mapping)",
    summary: "Architecture choices, centralized/distributed systems, clients, tiers, processing, and integration.",
    questions: [
      { type: "mc", prompt: "In a three-tier architecture, what sits between the user interface and the data server?", options: ["A paper form", "An application or business-logic layer", "A second keyboard", "A data dictionary"], answer: 1, explanation: "The middle tier processes requests and translates them into data operations." },
      { type: "mc", prompt: "Where does most application processing logic reside in a thin-client design?", options: ["On the client", "On the server", "In the user's browser cache only", "On a disconnected workstation"], answer: 1, explanation: "Thin clients rely on the server for most processing." },
      { type: "mc", prompt: "What does scalability describe?", options: ["The ability to expand, change, or downsize as needs change", "The number of colors in an interface", "The age of a legacy system", "The length of a password"], answer: 0, explanation: "Scalability is the ability to adapt capacity to changing demand." },
      { type: "mc", prompt: "What is middleware used for?", options: ["Connecting and integrating otherwise separate software or hardware", "Replacing all network security", "Writing business cases", "Drawing external entities"], answer: 0, explanation: "Middleware provides interfaces that let different systems communicate." },
      { type: "tf", prompt: "A centralized system performs virtually all processing on a central host.", answer: true, explanation: "Users interact through terminals or clients while the host performs the work." },
      { type: "tf", prompt: "A WAN is limited to a single room or building.", answer: false, explanation: "A WAN spans long distances and can connect geographically separated LANs." },
      { type: "tf", prompt: "Total cost of ownership includes indirect and ongoing costs as well as the initial purchase price.", answer: true, explanation: "TCO captures operating, support, training, maintenance, and other lifecycle costs." },
      { type: "short", prompt: "Distinguish a fat client from a thin client.", keywords: [["fat", "thick", "client processing", "client logic"], ["thin", "server processing", "server logic"]], answerText: "A fat (thick) client performs most application processing locally; a thin client leaves most processing on the server.", explanation: "The distinction is where application logic executes." },
      { type: "short", prompt: "Name the three core functions of a business information system considered in architecture design.", keywords: [["interface", "user"], ["application", "processing", "logic"], ["data", "storage", "access"]], answerText: "User interface, application/processing logic, and data storage/access.", explanation: "Architecture decides where each of these three functions runs." },
      { type: "short", prompt: "Distinguish online processing from batch processing.", keywords: [["online", "immediate", "real time", "transaction"], ["batch", "group", "later", "scheduled"]], answerText: "Online processing handles transactions interactively or immediately; batch processing accumulates transactions and processes them together later or on a schedule.", explanation: "The main difference is immediate per-transaction handling versus grouped deferred processing." }
    ]
  }
];

export const chapterById = (id) => chapters.find((chapter) => chapter.id === String(id));
