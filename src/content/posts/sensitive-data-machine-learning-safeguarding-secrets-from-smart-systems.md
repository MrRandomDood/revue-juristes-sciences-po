---
title: "Sensitive Data & Machine Learning: Safeguarding Secrets from Smart Systems"
author: "Antoine Lenges"
date: 2024-10-01T16:04:17.291Z
lang: en
categories: ["digital-law-and-technology"]
cover: "/media/posts/1826fe_70b77bbf890d4b53b5c909db59bb626b.jpg"
description: ""
---

##### ‘‘Artificial intelligence (AI) seeks to make computers do the sorts of things that minds can do’’\[1\]. Mirroring human reasoning, AI uses prediction, inference, analogy, and other thinking patterns to interpret information. Machine learning (ML), a subcategory of AI, is ‘‘the ability of computer algorithms to learn from data and make predictions for new situations, and improve automatically through experience’’\[2\]. To function properly, ML requires data input for programs to grow. The central question is, therefore, whether the law should be used to protect that data, and if so, to what degree.

#####          The General Data Protection Regulation (GDPR)\[3\] seeks to answer that question by providing a regulatory framework for information technologies (IT) in the EU. It defines personal data as ‘‘any information relating to an identified or identifiable natural person (‘data subject’)’’\[4\], and distinguishes the level of protection required depending on the data's ‘‘sensitivity’’. The highest legal safeguards are granted to ‘‘special category data’’, which relates to ‘‘racial or ethnic origin, political opinions, religious or philosophical beliefs, \[…\] trade union membership, \[…\] genetic data, biometric data \[…\], data concerning health or data concerning a natural person's sex life or sexual orientation’’\[5\].

#####          As Purtova stated: ‘‘to perceive data as information, we need to make sense of it’’\[6\]. Making sense of personal data requires its processing, i.e. ‘‘any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means’’\[7\]. With the commercial and social rise of AI, ML data processing has raised a range of concerns around data protection. Because ML models require vast data inputs to be trained on, they are fed by a significant amount of personal information freely available on the internet. More importantly, because ML processes data in a myriad of ways, there are high risks that it could attribute new meaning to isolated data points. As ‘‘information is data + meaning’’\[8\], ML can therefore forge sensitive information by using personal data as a proxy to create meaning. Such machine-led processing is defined as ‘‘automated processing’’ and is subject to a higher standard of care for IT providers and users\[9\].

##### This essay will argue that, by adopting a risk-based approach, data protection legislation can accommodate the changes brought by ML. Firstly, I will analyse how ML data processing exacerbates identification risks and weakens consent of the data subject. Secondly, I will attempt to reframe the scope of personal data regulations by crafting a fundamental right to data privacy. This potential new right will result in a paradigm shift, calling for a risk-based approach of data protection within a broader scope of personal data. Thirdly, I will put forward two propositions for legislative reform within the GDPR to ensure fairness in ML data processing: stricter Data Protection Impact Assessments (DPIAs), and an enhanced right to explanation.

\*\*\*

#### I. ASSESSING THE IMPACT OF MACHINE LEARNING TECHNOLOGIES ON DATA PROTECTION

##### ***ML exacerbates identification risks***

#####          ML data processing is based on inference, which consists of ‘‘the possibility to deduce, with significant probability, the value of an attribute from the values of a set of other attributes’’\[10\]. Inference mechanisms are at the core of ML training, as algorithms develop the ability to link data points that would otherwise be isolated. This can often reveal new information about a data subject, which makes them more easily identifiable online.

##### The Article 29 Working Party (A29WP) laid out three cumulative criteria, postulating that data is not identifiable if (i) it is not possible to single out an individual; (ii) it is not possible to link records relating to an individual, and (iii) information concerning an individual cannot be inferred\[11\]. Yet, as academics have revealed it, de-identification does not eliminate a residual risk of identification\[12\]. Drawing from immense and open-access sources such as Big Data, which simplifies the combination of various datasets, de-anonymising personal data is an increasingly easy task for algorithms to achieve\[13\]. Data subjects may also be identified by data controllers with ‘‘online identifiers such as IP addresses, cookies, or other identifiers’’\[14\], which nowadays are almost impossible to avoid. Thus, by aggregating seemingly isolated data points to identify data subjects, ML can piece together a once anonymous puzzle, inferring personal information about an individual.

##### Cyberattacks targeting ML models are an increasingly serious issue for data protection legislation and can have severe consequences when aimed at personal data. Membership inference attacks —a kind of cyberattack on ML models— can forge sensitive data outputs from non-sensitive personal data inputs, either by allowing the retrieval of a certain training dataset, or by inferring subclasses to certain data points entered in a model\[15\]. In the instance of a membership inference attack, the identification of members from a particular dataset can be linked by the attackers to characteristics which would otherwise not be classified as ‘‘sensitive personal data’’ when isolated. The Court of Justice of the European Union (CJEU), when considering a case where the sexual orientation of two men was inferred by such an attack, stated that ‘‘data that are capable of revealing the sexual orientation of a natural person by means of an intellectual operation involving comparison or deduction fall within the special categories of personal data’’\[16\]. In that sense, the Court endorsed the position that sensitive information inferred from ‘‘normal’’ data must be qualified as sensitive personal data.

##### In short, de-identification seems hardly achievable as ML, drawing from enormous data sources, can bypass anonymisation techniques through inference. This poses a material threat to data privacy and the fundamental rights of data subjects.

##### ***ML weakens the rights of the data subject***

#####          New ML processing technologies question the legitimacy and capacity of data subjects to actually consent to the extent of ML data processing. As established in the Charter of Fundamental Rights of the European Union (CFREU), ‘‘data must be processed fairly for specified purposes and on the basis of the consent of the person concerned’’\[17\]. In that sense, no personal data should be processed when a data subject has not consented to it or when the processing is not conducted for specified purposes.

##### Nonetheless, how can a data subject actually consent to the extensive process of ML data processing and its consequences? Consent is defined as a ‘‘freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she \[…\] signifies agreement to the processing of personal data’’\[18\]. It seems unlikely that all data subjects will freely consent to the use of inference by ML to reveal more personal information. When considering special category data, processing can be allowed if the data subject specifically consents to it\[19\]. Yet, personal data can be made sensitive when filtered through algorithms which create new information, even though the subject did not consent to a sensitive data processing. Moreover, not all data subjects will have the knowledge and/or capacity to understand how their data is being processed by ML, thereby weakening their ability to be ‘‘fully informed’’ when consenting to data processing.

##### Thus, establishing that the data subject has given valid consent through a ‘‘positive action’’\[20\] is increasingly hard due to the extent and complexity of ML data processing.

#### II.    REFRAMING THE SCOPE OF PERSONAL DATA PROTECTION RIGHTS

##### *Uphold the right to data protection as a fundamental right*

#####          To appraise the impact of ML on data protection, a broader definition of the right to data protection should be adopted. Including this protection within a broader framework of fundamental rights\[21\] would help establishing ‘‘information privacy as a fundamental human right’’\[22\].

##### Data protection should firstly be differentiated from the right to privacy\[23\], and be considered as a fundamental right sui generis. As Lynskey outlines, the right to privacy and data protection are entangled in three different ways: either (i) they are ‘‘separate but complementary’’, or (ii) ‘‘data protection is a subset of the right to privacy’’, or (iii) data protection is an ‘‘independent right’’ that helps protect privacy\[24\]. Because data protection is a conveyor for protecting a data subject’s private information, bearing with the author’s third interpretation stresses that data protection ought to be a separate right.

##### Furthermore, establishing a fundamental right to data protection would entail ‘‘offer\[ing\] individuals enhanced control over their personal data’’\[25\]. In that view, data subjects could bring a claim in front of both the CJEU and the European Court of Human Rights (ECtHR), therefore enabling them to uphold their data protection rights via the higher standard of care required for fundamental rights. Data protection claims could be brought before courts in instances where, for example, an algorithm created sensitive data that impacted the data subject and therefore bypassed its right to data protection. In a way, the CJEU was already right when it claimed in 2003 that ‘‘in so far as they govern the processing of personal data liable to infringe fundamental freedoms \[the provisions of the Data Protection Directive\[26\]\] must necessarily be interpreted in light of fundamental rights’’\[27\].

##### By creating a new European fundamental personal data protection right, data subjects could more easily bring claims against data controllers using algorithms that threaten the integrity of their personal information.

##### *Adopt a risk-based approach within a broader scope of personal data*

#####          Following the axiom of a newfound fundamental right to data protection, the scope of personal data should be enlarged to protect all kinds of personal information. As Purtova put it: ‘‘everything is data and all data has meaning; hence, everything is or contains information’’\[28\]. That is even more true in the context of ML data processing. As a matter of fact, ML models themselves can be qualified as personal data when model inversion or membership inference attacks create a new set of personal data\[29\]. It would therefore only be logical to include such kinds of personal data within the contemplation of European legislation. Expanding the scope of personal data would allow a more efficient and necessary appraisal of ML-related risks. Indeed, as ‘‘perfect anonymisation is impossible, \[…\] the legal definition \[of personal data\] needs to embrace the remaining risk \[of identification\]’’\[30\] that can be caused by ML. The relevant assessment of whether personal data is effectively protected should then be whether personal data is subject to a risk of identification, as put in Recital 26\[31\]. In short, data should be more broadly defined to allow more accurate risk assessments of data subject’s privacy.

##### It would thus only be fair —and timely— to transfer the risk-based approach of identification within the binding provisions of the GDPR to assert the importance of a broad definition of personal data with risk-based harms.

#### III.  NAVIGATING ML-PROCESSED PERSONAL DATA: STRATEGIC AVENUES FOR A MODERN PROTECTION OF PRIVACY IN THE GDPR

##### ***Reinforce and systematise Data Protection Impact Assessments (DPIAs)***

#####          A first cornerstone of this new risk-based regime would be stronger DPIAs. Triggered when data processing ‘‘is likely to result in a high risk to the rights and freedoms of natural persons’’, DPIAs are especially relevant when considering new technologies. As such, ML data processing falls well within that scope. Even though they are a useful regulatory mechanism that encourages privacy safeguarding, DPIAs require a well-deserved reinforcement. As Mittelstadt pointed out, DPIAs are self-assessments, can be potentially one-off, and have no publicity requirement\[32\], which makes them a half-measure. With the rise of ML data processing, claims for poorly conducted or missing DPIAs will spike.

##### DPIAs should therefore become a cornerstone of the data controllers’ accountability. They should be conducted every time technology such as ML is used, to make sure that the risks associated with the technology used are exhaustively prevented. This would render the provision in article 35(1) stating that ‘‘a single assessment may address a set of similar processing operations that present similar high risks’’ void, as DPIAs would become systematic. Of course, this puts an uneven burden onto data controllers using this kind of ML data processing. To preserve fairness, DPIAs could be conducted every trimester on the kinds of risky data processing projected to happen, with an obligation to be published every time an assessment is completed. That way, data controllers would regularly control how data is being processed, what is done to safeguard it, and will be held accountable by publicly sharing their results. Such an approach can seem idealistic by eclipsing basic counterarguments, such as privity of contract or trade secrets. Nonetheless, considering the risk posed by ML to data subject’s rights, the scales could —and should be— tilted a bit more towards the fundamental rights side rather than the commercial one. 

##### By systematising DPIAs, they are likely to become the new safety assessment for ML data processing, especially when sensitive personal data is being processed or inferred.

##### ***Establish a true right to explanation***

#####          This second strategy aims at increasing transparency for the data subject. The right to explanation consists of providing the data subject with ‘‘an explanation of the decision reached’’ when their personal data has been processed by automated means\[33\]. However, the law around the right to explanation is ‘‘restrictive, unclear, or even paradoxical concerning when any explanation-related right can be triggered’’\[34\]. In that regard, a true and solid right to explanation should be included within the binding provisions of the GDPR and not just mentioned swiftly in Recital 71. Such a new right would help data subjects to understand how automated decisions have been reached. To do so, the heart of this provision should be an explanation of the logic underpinning the decision reached, not of the outcome\[35\]. As such, a data subject could not only get access to a detailed explanation of the automated decision they have been subjected to but also, as a consequence of larger volumes of information shared about those processes, become more literate about their rights to privacy and data protection.

##### In essence, a true right to explanation would foster transparency and data subject education about algorithmic data processing. Consequently, the overall quality standard of the explanations provided to data subjects when exerting their right to explanation would logically rise.

##### \*\*\*

#####          *In fine*, by significantly increasing the risk of sensitive personal data being inferred and weakening the strength of data subjects’ consent, ML data processing calls for a risk-based approach of data protection. Such an approach can be attained by inscribing the right to data protection as a *sui generis* fundamental right, upheld within a broader scope of personal data that comprises model-generated personal data. As a first guidance, upcoming legislation should adopt accountability and transparency strategies, such as stricter DPIAs and a potent right to explanation.

#####          Striking the right balance between upholding the rights of the data subject and supporting ML-led innovation is an arduous task. Yet, for innovation to remain humane, navigating this question must be done by keeping in mind one of the cardinal principles of fundamental European rights: privacy.

##### \[1\] Margaret Boden, Artificial Intelligence: A Very Short Introduction (2018, OUP), 1.

##### \[2\] Nadezhda Purtova, ‘The Law of Everything. Broad Concept of Personal Data and Future of EU Data Protection Law’ (2018) 10 Law, Innovation and Technology 40, 53.

##### \[3\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation, GDPR).

##### \[4\] ibid., art. 4(1).

##### \[5\] ibid., art. 9(1).

##### \[6\] Purtova (n 2), 51.

##### \[7\] GDPR, art. 4(2).

##### \[8\] Luciano Floridi, ‘Is Information Meaningful Data?’ (2005) 70(2) Philosophy and Phenomenological Research 351, 370.

##### \[9\] GDPR, Recital 71.

##### \[10\] A29WP, Opinion 05/2014 on Anonymisation Techniques (WP 216) 0829/14/EN, 12.

##### \[11\] A29WP on Anonymisation Techniques (n 10), 3.

##### \[12\] Michèle Finck and Frank Pallas, ‘They Who Must Not Be Identified—Distinguishing Personal from Non-Personal Data under the GDPR’ (2020) 10 International Data Privacy Law 11, 16.

##### \[13\] Paul Ohm, ‘Broken Promises of Privacy: Responding to the Surprising Failure of Anonymization’ (2010) 57 UCL Law Review 1701.

##### \[14\] GDPR, Recital 30.

##### \[15\] Emiliano De Cristofaro, ‘‘An Overview of Privacy in Machine Learning’’ (arXiv, 18 May 2020) <[http://arxiv.org/abs/2005.08679](http://arxiv.org/abs/2005.08679)\> accessed 14 April 2024.

##### \[16\] C-184/20: OT v Vyriausioji tarnybinės etikos komisija (Chief Official Ethics Commission, Lithuania)

##### \[17\] Charter of Fundamental Rights of the European Union (CFREU), art. 8(2).

##### \[18\] GDPR, art. 4(11).

##### \[19\] ibid., art. 9(2)(a).

##### \[20\] Orla Lynskey, The Foundations of EU Data Protection Law (Oxford University Press 2015), 31.

##### \[21\] ibid., 38.

##### \[22\] Pamela Samuelson, ‘Privacy as Intellectual Property’ (2000) 52 Stanford Law Review 1125, 1171.

##### \[23\] CFREU (n 17), art 7.

##### \[24\] Lynskey, (n 20), 90.

##### \[25\] ibid., 90.

##### \[26\] Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data (Data Protection Directive, DPD); ancestor of the GDPR and first data protection legislation adopted in the EU.

##### \[27\] Case C-139/01 Österreichischer Rundfunk and Others \[2003\] ECR I-4989, para 68.

##### \[28\] Purtova, (n 2), 53.

##### \[29\] Michael Veale, Reuben Binns and Lilian Edwards, ‘Algorithms That Remember: Model Inversion Attacks and Data Protection Law’ (2018) 376 Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences20180083.

##### \[30\] Michèle Finck and Frank Pallas, ‘They Who Must Not Be Identified—Distinguishing Personal from Non-Personal Data under the GDPR’ (2020) 10 International Data Privacy Law 11, 12.

##### \[31\] GDPR, Recital 26; art 35(1).

##### \[32\] Brent Mittelstadt, ‘Accountable Algorithms: Beyond the GDPR’ (The GDPR and Beyond: Privacy, Accountability, and the Law conference, London, April 2018).

##### \[33\] GDPR, Recital 71.

##### \[34\] Lilian Edwards and Michael Veale, ‘Slave to the Algorithm? Why a “Right to an Explanation” Is Probably Not the Remedy You Are Looking For’ (2017) 16 Duke Law & Technology Review 18.

##### \[35\] Andrew Selbst and Solon Barocas, ‘The Intuitive Appeal of Explainable Machines’ (2018) 87 Fordham Law Review 1085, 1107.
