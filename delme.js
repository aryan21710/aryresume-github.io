<!DOCTYPE html>
<html>
	<head>
		<title>MY RESUME</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="icon" type="image/png" href="./public/images/mylogo.png" />
		<script src="https://yarnpkg.com/en/package/normalize.css"></script>
		<link href="./public/index.css" rel="stylesheet" media="all" />
		<link href="./public/phone.css" rel="stylesheet" media='screen and (min-width:
			300px) and (max-width: 600px)' />
		<link href="./public/fontawesome-free-5.8.2-web/css/all.css" rel="stylesheet">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.js"></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.0/velocity.min.js"></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery.waitforimages/1.5.0/jquery.waitforimages.min.js"></script>
		<script src="./public/js/index.js"></script>
	</head>

	<body>
		<main>
			<iframe src="./public/sounds/1-minute-of-silence.mp3" allow="autoplay"
				id="audio" style="display:none"></iframe>

			<audio id="bikeAudio" autoplay loop>
				<source src="./public/sounds/biker.mp3" />
			</audio>

			<div id="landingPage">
				<div class='img1' id="scenery">

					<div class='img1' id="bikeImg" class="bikeImg">
						<p></p>
					</div>
				</div>


				<div class='img1' id="road">
					<div id="fwheel">
						<p></p>
					</div>
					<div class='img1' id="bwheel">
						<p></p>
					</div>
				</div>
			</div>

			<div id="resume">
				<div id="profile">
					<div id="contents1">
						<div id="front">
							<h1>Profile</h1>
							<div id="basicInfo">
								<div class="image"></div>
								<div class="text">
									<h2>Aryan Sharma</h2>
									<p>
										Self Taught Passionate Full Stack Web Developer. Possess strong
										expertise and 5
										Years of Well-rounded Experience in Building Quality WebSites and
										WebApps using
										modern <b>MERN (MongoDB, Express, ReactJS with Redux, Node) stack </b>along
										with
										<b>HTML5, CSS3, Javascript</b>
									</p>
								</div>
							</div>

							<div id="contactInfo">
								<div id="content">
									<p> <span><i class="fas fa-spin fa-phone"></i></span> +919110298342</p>
									<p> <span><i class="far fa-spin fa-envelope"></i></span>
										arysharma1209@gmail.com</p>
									<p> <span><i class="fas fa-spin fa-home"></i></span> #143, JP Nagar 7th
										Phase, Bengaluru, India</p>
								</div>
							</div>



						</div>


					</div>
				</div>

				<div id="experience">
					<div class="workExp">
						<div id="staticHeader">
							<div id="title"><h1>Professional Experience</h1></div>
							<div id="d1">
								<div id="Prev"><button><<</button></div>

								<div id="stopAnimHere">
								</div>

								<div id="Next"><button>>></button></div>


							</div>
						</div>
						<div id="weContent">
							<div id="Comp1">
								<h2>Nov2020 - Current</h2>
								<h3>Geektrust (Thoughtworks) - FrontEnd Web and Mobile App Developer</h3>
								<ul>
									<li> Worked in collaborative, value-driven teams to build innovative
										customer experiences for our Internal Employees.</li>
									<li> Responsible to debug and Develop New features in a large scale
										Learning and Development Web-Application used extensively by
										Capability Leads, Principal Engineers, Developers, Business Analyst
										and Internal Employees for creating training and events.</li>
									<li> Development of New User facing Features using React-js (Download
										CSV for events/trainings, Create-Edit Events and Trainings, Search
										Feature to Let User Search By Program and Location, Integrating the
										Front-end of the Application with Email Client to send Announcements,
										Integrating the Front-end of the Application with Google Calendar to
										Send Invites for events , Disabling Self-signup for an event, and
										several more features. </li>
									<li> Used Material-UI Framework to develop Responsive UI and translate
										designs/wireframes/prototypes for the Learning and Development Web
										Application into high quality code..</li>
									<li> Integrated Redux Persist to store all Event/Training Information
										on local-storage to maintain data Availability during Page-Refresh..</li>
									<li> Displaying Different Web layout/pages depending on different
										Authorization roles of logged In User.. </li>
									<li> Converting the existing Legacy Class based React Component
										Architecture into React hooks Architecture.</li>
								</ul>
								<br /><br />
							</div>

							<div id="Comp2">
								<h2>Jun 2019 - Feb 2020</h2>
								<h3>Intl FCStone - Full Stack Web and Mobile App Developer</h3>
								<ul>
									<li>Developed Mobile Version of Ecustody Web Portal using React-Native
										Framework compatible with Both Android and IOS Eco-system.</li>
									<li> Developed New React Based Modular Components to Revamp the
										Legacy/Existing UI written in Javascript/JQuery.</li>
									<li>Responsible to code well designed, testable, efficient code by
										using best software development. </li>
									<li> Developed highly responsive user interface components via
										React/Redux Concepts.
										.</li>
									<li> Integrating data from various back-end services and databases.</li>
									<li> Work on Bug Fixing and Resolving Bugs Found On the Ecustody
										Customer Portal. </li>
									<li> Translated design team's UX wireframes and mockups into
										responsive, interactive features, using Reactjs.
									</li>
									<li> Participating in peer code reviews for the mission-critical single
										page application ensuring compliancy with the company coding
										standards. </li>
									<li> Scoping project requirements using Agile & Scrum principles
										related to the mission-critical single page application </li>
									<li>Consuming REST API's by implementing CRUD Operations using React.</li>
									<li>Expertise in Browser-based troubleshooting and Debugging web
										application.</li>
								</ul>

							</div>

							<div id="Comp3">
								<h2> December 2015 - May 2019</h2>
								<h3>SimarCorp.net - Full Stack Web Developer</h3>

								<ul>
									<li> Created Backend And Frontend for a Lawyer Web Application which
										allows user to enter and store information about an ongoing court case
										(Court Documents, Court Dates, Court Proceedings Info, Petitioner and
										Respondent Personal Information).
									</li>
									<li> Experience in implementing Security Features such as
										Authentication, Authorization, using Google Oauth and Json Web Token.
										.</li>
									<li> Implemented and Developed HTTPS Enabled Secure Sign-In to the
										website.
										. </li>
									<li> Implemented and Developed Security Framework and Login related
										features like Forgot Password, Account Activation, Reset Password.
										..</li>
									<li> Implemented and Developed API endpoint creation using Node/Express
										and accessing API Endpoint using axios and react.
										.</li>
									<li> Implemented and Developed Secure Storage of user court documents
										on the backend.
										. </li>
									<li> Automated Frontend and Server Side testcases using Jest Testing
										framework.
										.</li>

									<li>Experience in Implementing Smooth React Animation across web pages.
									</li>

									<li>Created New Animated Side Navigation Hamburger Menu using React
										which allows user to navigate between different Pages in the App.
									</li>

									<li>Experience in sprint planning, deriving estimates and timelines to
										develop New features and gaps in an existing Web Application.
									</li>
								</ul>

							</div>



							<div id="Comp4">
								<h2>Feb 2013 - Sep 2014</h2>
								<h3>Arista Networks, Bangalore - Software Engineer</h3>
								<p>
									Worked in testing Data Center enviroment for customers like facebook,
									google etc.
									<br />
									Tested BGP, MPBGP in data center environment. <br />
									Tested OSPFv2 in data center environment. <br />
									Wrote Test Plans, filed bugs, resolved customer cases <br />
									Automated test cases using Python and Arista Automation Framework.<br/>
										In depth testing of IP related features like Ipv4, Fragmentation and
										Reassembly, Jumbo Frame, Vlan. <br/>
											Tracking the bug filed by Team members and bringing closure on
											Pending /Duplicate/Mistaken bugs. Sending Consolidated list of
											ShowStopper/Release blocker PR to the Team </br>
										Part of Recruitment team to Hire the right candidate for QA team.<br/>
											Interact with development team members with design and Bug related
											issues and bring it to closure.<br/>
											</p>
											<br /><br />
										</div>


										<div id="Comp5">
											<h2> Stoke Networks, Bengaluru</h2>
											<h3> April 2011 - Nov 2012</h3>
											<ul>
												<li>Testplan creation using RFC, SFS and PRD . Execution of
													end-to-end manual and automated tests to validate new Product
													Development life cycle for EX Series router { EX8200, EX4200,
													EX-XRE Virtual Chassis)</li>
												<li> Tested NSSU. OSPF,MPLS L3VPN, MPLS L2VPN </li>
												<li> Responsibilities as a Team lead in a MPLS Project. Coordinated
													and managed MPLS Features. Reviewed all the Functional Spec, Unit
													Testplan, Systest Plan. Conducted training for the team on MPLS
													Overview. </li>
												<li>Worked with Dev team to formulate a comprehensive MPLS L3VPN,
													MPLS L2VPN test strategy and Unit Test Plan.Provided review
													comments.</li>
												<li>Conducted Training on Juniper Automation Process. Made a Tool
													which will shutdown all Juniper switches/Router automatically every
													night.</li>
												<li>Used effectively during Juniper Shutdown Period. Wrote a
													whitepaper “HOW TO BOOT THE JUNIPER SWITCH/ROUTER” for other team
													members.</li>
											</ul>
										</div>
										<div id="Comp6">
											<h2> Juniper Networks, Bengaluru</h2>
											<h3> Nov 2008 - April 2011</h3>
											<ul>
												<li>Joined as a technical support engineer. Lateral movement into
													networking IBU.Helping customers with home networks, DSL
													connections with various DSL modems like netopia, uhp, broadmax,
													visionet.</li>
												<li>Troubleshooting PPPOE connection involving technologies like DSL
													.Establishing and troubleshooting small and medium enterprise
													networks with multiple computers, routers and switches.</li>
											</ul>
										</div>
										<div id="Comp7">
											<h2> Cisco Systems, Bangalore - Snr Software Engineer </h2>
											<h3> Jul 2006 - Oct 2008</h3>
											<ul>
												<li>Test plan creation and execution of manual, and automated tests
													to validate new product development life cycle for the 7600 series
													router for Broadband Features </li>
												<li> Reproducing pre-existing defects and customer reported. defects
													with current builds, minimize the steps for recreation in order to
													identify the point of failure.</li>
												<li> Verify defects with instrumented builds provided by the
													developer.and subsequent verification after code check-in.Open new
													problem reports for failures detected using DDTS, troubleshoot
													failures to their root-cause and clearly understand and articulate
													those failures.</li>
												<li>Mentored new joinees and helped them in ramping up and
													Understanding Juniper Process.</li>

											</ul>
										</div>
										<div id="Comp8">
											<h2>Tata Elxsi, Bangalore - Software Engineer</h2>
											<h3>April 2005- Jun 2006 </h3>
											<ul>
												<li>QA test engineer : Client - World Wide Packets Location: -
													Spokane WA.</li>
												<li>Requirement analysis, test plan creation and execution for
													protocols like OSPF.</li>
												<li> Provide inputs and take ownership of all automation script
													review and execution on a per release basis on a smoke testbed. Fix
													autons.</li>
												<li>Automation of test plans independently involving extensive usage
													of TCL and Expect. </li>
											</ul>
										</div>


									</div>
								</div>
							</div>
							<div id="skills">
								<div id="contents1">
									<h1>TECHNICAL SKILLS</h1>
									<ol>
										<h3>Programming Skills</h3>
										<ul>
											<li>
												HTML5, ES6+ Javascript, Dom Manipulation, CSS3, Nodejs, MongoDB,
												ExpressJS, ReactJS, Redux, React-Native, Angular, Rest API,
												JQuery, GIT, JSON, Responsive Web Design, Debugging with Chrome
												DevTools, WebPack Module Bundlers,
												NPM Package Manager ,Babel, Jest Automation Framework.
											</li>
										</ul>
										<h3>Networking Skills</h3>
										<ul>
											<li>
												OSI 7 layer model. TCP, IP,ICMP, ARP, Routing protocols
												RIP,OSPF,BGP3, MPBGP. <br />
												Clear understanding of subnetting, MPLS, MPLS L3 VPN, MPLS L2VPN.
											</li>
										</ul>
										<h3>Testing Tools</h3>
										<ul>
											<li>Ixia Explorer, IxNetwork, Spirent Application Center, Mu
												Dynamics.</li>
										</ul>
									</ol>
								</div>
							</div>
							<div id="education">
								<div id="contents2">
									<h1>EDUCATION</h1>
									<div id="eduDetails">
										<p>March 98 - March 02</p>
										<p>Kits College Of Engineering, RAMTEK</p>
										<p>Nagpur University</p>
										<p>Bachelor of Engineering</p>
										<p>60% Aggregate in B.E in Computer Technology.</p>
									</div>
								</div>
							</div>
						</div>
					</main>
				</body>
			</html>
