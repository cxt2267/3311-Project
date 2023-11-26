// Possible Email object class for the project

export class Email {
	constructor(receiver, sender, phish_emails, real_emails) {
		this.receiver = receiver;
		this.sender = sender;
		this.date = new Date();
		this.phish = this.isReal(phish_emails, real_emails);
		this.clues = [];
		this.source = this.determineSource(phish_emails, real_emails);
		this.context;
		this.explanation;
	}
    
	get getSource() {
		return this.source;
	}

	get getPhish() {
		return this.phish;
	}
    
	get getClues() {
		return this.clues;
	}

	get getContext() {
		return this.context;
	}
  
  get getExplanation() {
		return this.explanation;
	}
  
  isReal(phish_emails, real_emails){
        // WILL NEED TO UPDATE NUMBERS AS NUMBER OF TEMPLATES CHANGE
        // true == Email is real
        // false == Email is a Phish
        var realIfOdd = Math.floor(Math.random() * 2);
        if(realIfOdd == 1 && phish_emails.length != 9){
            return true;
        }
        else if(realIfOdd == 1 && phish_emails.length == 9){
            return false;
        }
        else if(realIfOdd == 0 && real_emails.length != 8){
            return false;
        }
        else if(realIfOdd == 0 && real_emails.length == 8){
            return true;
        }
    } 
  
  determineSource(phish_emails, real_emails){
        // The email is a phish
        if (this.phish == false){
            var quest_num = Math.floor(Math.random() * 8) + 1;
            while (phish_emails.find(o => o == quest_num)){
                quest_num += 1;
                if(quest_num == 9){
                    quest_num = 1;
                }
            }
          	switch(quest_num){
                case 1:
                    phish_emails.push(quest_num);
                    this.context = "Phish template 1 context";
                    this.explanation = "Phish template 1 explanation";
                    return "./Phish_Emails/template1/email_template.html";
                case 2:
                    phish_emails.push(quest_num);
                    this.context = "You are an Amazon customer and have recently received an email regarding fradulent activity regarding your account.";
                    this.explanation = "This email is a phishing attempt. The first sign is some grammatical errors seen through out the email." +
                    "There are some capitalization errors and \"unsual\" is spelled wrong." + 
                    " If you hover your cursor over the links, you'd notice they are shortened URLs, a common sign of a malicious link. " +
                    " These types of phishing attempts also commonly threaten a user as in this case where \"we will have to terminate the account.\" ";
                    return "./Phish_Emails/template2/email_template2.html";
                case 3:
                    phish_emails.push(quest_num);
                    this.context = "Phish template 3 context";
                    this.explanation = "Phish template 3 explanation";
                    return "./Phish_Emails/template3/email_template3.html";
                case 4:
                    phish_emails.push(quest_num);
                    this.context = "Phish template 4 context";
                    this.explanation = "Phish template 4 explanation";
                    return "./Phish_Emails/template4/email_template4.html";
                case 5:
                    phish_emails.push(quest_num);
                    this.context = "Phish template 5 context";
                    this.explanation = "Phish template 5 explanation";
                    return "./Phish_Emails/template5/email_template5.html";
                case 6:
                    phish_emails.push(quest_num);
                    this.context = "A company is emailing you about an opportunity to earn money through PayPal if you follow the directions provided in the links given.";
                    this.explanation = "This is a phish email because the sender is telling you that you could possiby receive money through your PayPal account " 
                    + "without explicitly letting you know the conditions required to receive that money. They have numerous links which they want you to first "
                    + "click before getting more information about the supposed funds you could receive. Usually, when an unfamiliar sender wants you to click on a link to another "
                    + "page before you can get a clear understanding of the content in their email, that page likely contains malware or may make data stored on your device vulnerable.";
                    return "./Phish_Emails/template6/email_template6.html";
                case 7:
                    phish_emails.push(quest_num);
                    var Names = ["Office 365", "Fidelity", "Amazon","Gmail", "Walmart","Yahoo"];
                    var num = Math.floor(Math.random() * 6);
                    this.clues.push(Names[num]);
                    this.context = "You have an " + this.clues[0] + " account and have not made any recent account changes to your profile.";
                    if(this.clues[0] == "Office 365"){
                    this.context = "You are a university student who regularly checks their school email." + this.context;
                    }
                    this.explanation = "This is a phishing email for several reasons. A major reason is the fact that a notification email regarding" +
                        " a PENDING password change is highly unusual. Usually these types of notifications are sent AFTER a password is changed and the process" +
                        " is generally quick enough that it doesn't stay on a pending status. 'Failure to Verify' is a grammatical error. " +
                        " These types of emails also usually threaten the user with some sort of time limit as in this case with the 'closure of your account'." +
                        " The address in the link also points to a shortened URL, a common sign for a malicious link."
                    return "./Phish_Emails/template7/template7.html";
                case 8:
                    phish_emails.push(quest_num);
                    var firstNames = ["Kim", "Teddy", "Margarett", "George", "Robert", "Maria"];
                    var lastNames = ["Smith", "Cruz", "Lopez", "White", "Steinbach"] 
                    num = Math.floor(Math.random() * 6);
                    this.clues.push(firstNames[num]);
                    num = Math.floor(Math.random() * 5);
                    this.clues.push(lastNames[num]);
                    this.context = "You are a university student and just received this email from another student. You have never met this student" +
                        " and haven't made any changes to your account."
                    this.explanation = "This is a phishing email for several reasons. First obvious reason is how this email was sent unwarranted from" +
                        " someone you don't know. There are also several grammar/spelling mistakes that can be seen throughout the message. " +
                        "The address for the 'Login' link is also some sort of shortened URL, a common sign for malicious links. " +
                        "Attacks like these also usually threaten the user with some sort of time limit to push users to make quick decisions" +
                        " without thinking too much on the context." + 
                        "Its likely that this email was sent from another student account that fell for this phishing attack."
                    return "./Phish_Emails/template8/template8.html";
                default:
                    return "default Phish";
            }
        }
        // The email is real
        else {
            var quest_num = Math.floor(Math.random() * 9) + 1; 
            while (real_emails.find(o => o == quest_num)){
                quest_num += 1;
                if (quest_num == 10){
                    quest_num = 1;
                }
            }
     		// the "* #" portion will change as more real_emtail templates are added 
			switch(quest_num){
                case 1:
                    real_emails.push(quest_num);
                    // Arrays of possible Names to insert
                    var Names = ["Overleaf", "Yahoo", "Outlook", "Google"];
                    // Random Number to pick a name with
                    var num = Math.floor(Math.random() * Names.length);
                    // Push picked name into clues array
                    this.clues.push(Names[num]);
                    // Adding Context
                    this.context = "You recently tried to login to " + this.clues[0] + " and quickly realized that you forgot your password."
                                        + "You started the process to reset your password 8 hours ago.";
                    this.explanation = "This is a real email because the addresses used throughout the email appear to be from who the sender says they are." +
                            " None of the address in any of the links are from another third-party. There are no obvious mistakes in the grammar." +
                            " If you'd also recently made a password change request for the given account, then this email would also be expected." +
                            " If this email was sent completely out of the blue, that's a big sign that this is a phishing attempt."
                        //Return filepath for template
                    return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
                case 2: 
                    real_emails.push(quest_num);
                    var Names = ["Frost", "Bank of America", "Wells Fargo", "Chase"];
                    var num = Math.floor(Math.random() * Names.length);
                    this.clues.push(Names[num]);
                    this.clues.push(Names[num].toLowerCase(). replace(" ","_"));
                    // Adding Context
                    this.context = "You have an account from " + this.clues[0] + " and its the end of the monthly period.";
                    this.explanation = "This is a real email mainly because it appears to be legitimate." + 
                        " Address on all the links appear to be from who the sender claims to be." + 
                        " It's also a normally expected email as you have an account from " + this.clues[0] +
                        " and its usual time they send statements." + " As a precaution, you can also view the statement directly from" + 
                        this.clues[0] + "'s website instead of using the links provided here."
                    return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";
                case 3:
                    real_emails.push(quest_num);
                    var UserNames = ["Michael", "Leo", "Jacki", "David", "Penny"];
                    var serviceNames = ["Github", "DocuShare","PageWrite", "SnapEdit", "FileService"];
                    var documentNames = ["ClassProject2", "ProjectCharter","CompanyBudget", "Presentation"];
                    var num = Math.floor(Math.random() * UserNames.length);
                    this.clues.push(UserNames[num]);
                    num = Math.floor(Math.random() * serviceNames.length);
                    this.clues.push(serviceNames[num]);
                    this.clues.push(serviceNames[num].toLowerCase().replace(" ", "_"));
                    num = Math.floor(Math.random() * documentNames.length);
                    this.clues.push(documentNames[num]);
                    // Adding Context
                    this.context = "You were recently assigned on a team with " + this.clues[0] + " for an assignment. "
                        + "The entire team decided to collaborate on the written documents through the " + this.clues[1] + " service.";
                    this.explanation = "This is a real email. The first evidence for legitimacy are how links appear to be from " +
                        "whole the sender says they are. Remember, you can usually check links without having to click them by hovering " +
                        "your cursor over them. Another piece of evidence is how there are no major errors in grammar within the message." +
                        " However, perfect grammar is not undeniable proof that an email isn't malicious."
                    return "./Real_Emails/template" + quest_num + "/template" + quest_num +".html";    
                case 4:
                    real_emails.push(quest_num);
                    // Adding Context
                    this.context = "real template 4 context";
                    return "./Real_Emails/template4/email_template4.html";
                case 5:
                    real_emails.push(quest_num);
                    // Adding Context
                    this.context = "real template 5 context"
                    return "./Real_Emails/template5/email_template5.html";
                case 6:
                    real_emails.push(quest_num);
                    // Adding Context
                    this.context = "real template 6 context";
                    return "./Real_Emails/template6/email_template6.html";
                case 7:
                    real_emails.push(quest_num);
                    var company_names = ["Google","Yahoo","Microsoft","AOL"];
                    var email_names = ["gmail","yahoo","outlook","aol"];
                    var company_addresses = [
                        "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
                        "701 1st Ave, Sunnyvale, CA 94089, USA",
                        "One Microsoft Way, Redmond, WA 98052, USA",
                        "770 Broadway, New York, NY 10003, USA"
                    ];
                    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                    var systems = ["Windows","Mac","Linux","Android","Apple iPhone"];
                    var meridiems = ["AM","PM"];
                    var times = ["12:20","1:45","2:50","3:15","4:32","5:56","6:07","7:11","8:48","9:10","10:28","11:59"];
                    var img_paths = ["images/google-logo.png","images/yahoo-logo.png","images/microsoft-logo.png","images/AOL-logo.jpeg"];
                    var num = Math.floor(Math.random() * company_names.length);
                    this.clues.push(company_names[num]);
                    this.clues.push(email_names[num]);
                    this.clues.push(company_addresses[num]);
                    this.clues.push(img_paths[num]);
                    num = Math.floor(Math.random() * 100); 
                    this.clues.push(localStorage.getItem('user-name') + num.toString());
                    num = Math.floor(Math.random() * months.length); 
                    this.clues.push(months[num]);
                    num = Math.floor(Math.random() * times.length);
                    this.clues.push(times[num]);
                    num = Math.floor(Math.random() * systems.length);
                    this.clues.push(systems[num]);
                    num = Math.floor(Math.random() * meridiems.length);
                    this.clues.push(meridiems[num]);
                    var min = Math.ceil(2013);
                    var max = Math.floor(2024);
                    var year = Math.floor(Math.random() * (max-min) + min);
                    this.clues.push(year.toString());
                    min = Math.ceil(1);
                    if(months[num]==="Feb") {
                        if(year%4==0) {
                            max = Math.floor(30);
                        }
                        else {
                            max = Math.floor(29);
                        }
                    }
                    else if(months[num]==="Apr"
                                || months[num]==="Jun"
                                || months[num]==="Sep"
                                || months[num]==="Nov") {
                        max = Math.floor(31);
                    }
                    else {
                        max = Math.floor(32);
                    }
                    var day = Math.floor(Math.random() * (max-min) + min);
                    this.clues.push(day.toString());
                        
                    // Adding Context
                    this.context = "You have an email account with " + this.clues[0] + ", and they are letting you know of a new sign-in attempt on an unfamiliar device.";
                    // Adding Explanation
                    this.explanation = "This is a real email because the sender is using a legitimate email address for a reputable company, and the physical address shown on the bottom can be verified as well. "
                                        + "There are no misspellings or abnormal grammar usage, and the message conveyed is straight to the point. The link provided evidently leads to a page on the "
                                        + "company's website rather than a page on a website unrelated to the supposed sender.";
                    return "./Real_Emails/template" + quest_num.toString() + "/template" + quest_num.toString() + ".html";
                case 8:
                    real_emails.push(quest_num);
                    var greetings = ["Hello","Good morning","Good afternoon","Good evening"];
                    var num = Math.floor(Math.random() * greetings.length);
                    this.clues.push(greetings[num]);
                    var senders = ["Sally","Jamie","Jessica","Haley","Zara"];
                    var num2 = Math.floor(Math.random() * senders.length);
                    this.clues.push(senders[num2]);
                    var shops = ["BlueJeanz","FitFashion","LazyBeauty","RoseyRed"];
                    var num3 = Math.floor(Math.random() * shops.length);
                    this.clues.push(shops[num3]);
                    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
                    var num4 = Math.floor(Math.random() * days.length);
                    this.clues.push(days[num4]);
                    var percents = ["30","35","40","45","50"];
                    var num5 = Math.floor(Math.random() * percents.length);
                    this.clues.push(percents[num5]);
                    this.context = "The owner of a popular Instagram boutique is letting you know about a huge sale they are hosting and is encouraging"
                    + " you to consider shop with them.";
                    this.explanation = "This Instagram Direct Message is legit because the messenger is not trying to lead you to a page outside of Instagram"
                    + " and does not provide you with any external links. " + senders[num2] + " does not request any personal information, and you can safely"
                    + " click on their Instagram handle without putting your data at risk since Instagram is a secure platform.";
                    return "./Real_Emails/template" + quest_num.toString() + "/template" + quest_num.toString() + ".html";
                case 9:
                    real_emails.push(quest_num);
                    var choice = Math.floor(Math.random() * 10000);
                    if(choice%2==0) {
                        this.clues.push(0);
                        var schools = ["The University of Texas at Arlington","Baylor University","Texas Tech University","Texas A&M University"];
                        var num = Math.floor(Math.random() * schools.length);
                        this.clues.push(schools[num]);
                        var alert_names = ["MavAlert","BearAlert","RaidAlert","RevAlert"];
                        this.clues.push(alert_names[num]);
                        var sender = Math.floor(Math.random() * 99999) + 10000;
                        this.clues.push(sender);
                        this.context =  schools[num] + " is sending out test alerts to ensure that their alert system works.";
                        this.explanation = "This text message is legit because " + schools[num] + " is simply trying to alert you of something without"
                        + " prompting you to click on any links or asking you to relay personal information. The sender is not asking anything of you.";
                    }
                    else {
                        this.clues.push(1);
                        var code = Math.floor(Math.random() * 999999) + 100000;
                        this.clues.push(code);
                        var companies = ["Venmo", "Cash App", "Zelle", "PayPal", "MoneyGram"];
                        var num = Math.floor(Math.random() * companies.length);
                        this.clues.push(companies[num]);
                        var sender = Math.floor(Math.random() * 99999) + 10000;
                        this.clues.push(sender);
                        this.context = companies[num] + " is sending you a verification code after you have just created an"
                        + " account on their platform or logged in after some time of inactivity.";
                        this.explanation = "This text message is legit because you are receiving a verification code right after signing"
                        + " up or logging into an application, which is normal. Furthermore, " + companies[num] + " is letting you know"
                        + " that you can enter the code directly in their app which means the message is really coming from them. If it was a scammer, they"
                        + " likely would have given you a weird link that does not directly lead to " + companies[num] + "'s" 
                        + " website.";
                    }
                    return "./Real_Emails/template" + quest_num.toString() + "/template" + quest_num.toString() + ".html";
                default:
                    return "default Real";
			}
		} 
	}
}