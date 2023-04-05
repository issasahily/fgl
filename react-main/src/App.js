import React , { Component }from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./components/Layouts/main.layouts";
import { Sidebar } from "./components/Layouts/sidebar.layouts";
import SidebarB from "./components/Utilities/sidebar";
import Home from "./components/Home/main.home";
import Ads from "./components/Ads/ads";
import Google from "./components/Google/google";
import MainUi from "./components/MainUi/mainui";
import Button from 'react-bootstrap/Button';

import "./App.css";
import Textdashboard from "./components/Text/text";
import ProfilePage from "./components/Profile/profile";
import Signin from "./components/Signin/signin";
import Signup from "./components/Signup/signup";
import Resetpassword from "./components/Reset/reset";
import Newpasswordconfirm from "./components/Newpassword/Newpassword";
import { useAuth0 } from "@auth0/auth0-react";
import Plans from "./components/Plans/plans";

import AmazonProductDescription from "./components/AmazonProductDescription/main.amazonproductdescription";
import AmazonProductFeatures from "./components/AmazonProductFeatures/main.amazonproductfeatures";
import BlogPostOutline from "./components/BlogPostOutline/main.blogpostoutline";
import BlogSubheadline from "./components/BlogSubheadline/main.blogsubheadline";
import BusinessName from "./components/BusinessName/main.businessname";
import CompanyBio from "./components/CompanyBio/main.companybio";
import ConclusionParagraph from "./components/ConclusionParagraph/main.conclusionparagraph";
import EmailSubjectLines from "./components/EmailSubjectLines/main.emailsubjectlines";
import EngagingQuestions from "./components/EngagingQuestions/main.engagingquestions";
import EventPost from "./components/EventPost/main.eventpost";
import FacebookAdHeadline from "./components/FacebookAdHeadline/main.facebookadheadline";
import FacebookAdPrimaryText from "./components/FacebookAdPrimaryText/main.facebookadprimarytext";
import FAQGenerator from "./components/FAQGenerator/main.faqgenerator";
import FeaturetoBenefit from "./components/FeaturetoBenefit/main.featuretobenefit";
import GoogleAdsDescription from "./components/GoogleAdsDescription/main.googleadsdescription";
import GoogleAdsHeadline from "./components/GoogleAdsHeadline/main.googleadsheadline";
import GoogleMyBusinessOfferPost from "./components/GoogleMyBusinessOfferPost/main.googlemybusinessofferpost";
import IntroParagraph from "./components/IntroParagraph/main.introparagraph";
import MarketingAngles from "./components/MarketingAngles/main.marketingangles";
import MyBusinessPost from "./components/MyBusinessPost/main.mybusinesspost";
import OneShortBlogPost from "./components/OneShortBlogPost/main.oneshortblogpost";
import ParagraphGenerator from "./components/ParagraphGenerator/main.paragraphgenerator";
import PerfectHeadline from "./components/PerfectHeadline/main.perfectheadline";
import PersonalizedColdEmails from "./components/PersonalizedColdEmails/main.personalizedcoldemails";
import PersonalLinkedlnPost from "./components/PersonalLinkedlnPost/main.personallinkedlnpost";
import PinterestPinDescription from "./components/PinterestPinDescription/main.pinterestpindescription";
import PinterestPinTitle from "./components/PinterestPinTitle/main.pinterestpintitle";
import PollQuestions from "./components/PollQuestions/main.pollquestions";
import ProductDescription from "./components/ProductDescription/main.productdescription";
import ProductName from "./components/ProductName/main.productname";
import QuoraAnswers from "./components/QuoraAnswers/main.quoraanswers";
import ReviewResponder from "./components/ReviewResponder/main.reviewresponder";
import RidiculousMarketingIdeas from "./components/RidiculousMarketingIdeas/main.ridiculousmarketingideas";
import UniqueValuePropositions from "./components/UniqueValuePropositions/main.uniquevaluepropositions";

import SentenceExpander from "./components/SentenceExpander/main.sentence-expander";
import PressReleaseTitleandIntro from "./components/PressReleaseTitleandIntro/main.press-release-title-and-intro";
import ExplainItToaChild from "./components/ExplainItToaChild/main.explain-it-to-a-child";
import PersonalBio from "./components/PersonalBio/main.personal-bio";
import PersuasiveBulletPoints from "./components/PersuasiveBulletPoints/main.persuasive-bullet-points";
import PhotoPostCaptions from "./components/PhotoPostCaptions/main.photo-post-captions";
import RealEstateListing from "./components/RealEstateListing/main.real-estate-listing";
import TweetMachine from "./components/TweetMachine/main.tweet-machine";
import TextSummarizer from "./components/TextSummarizer/main.text-summarizer";
import VideoSalesLetter from "./components/VideoSalesLetter/main.video-sales-letter";
import TikTokVideoCaptions from "./components/TikTokVideoCaptions/main.tiktok-video-captions";
import BabyNameGenerator from "./components/BabyNameGenerator/main.baby-name-generator";
import VideoScriptHookandIntroduction from "./components/VideoScriptHookandIntroduction/main.video-script-hook-and-introduction";
import VideoScriptOutline from "./components/VideoScriptOutline/main.video-script-outline";
import VideoTitles from "./components/VideoTitles/main.video-titles";
import VideoTopicIdeas from "./components/VideoTopicIdeas/main.video-topic-ideas";
import Commands from "./components/Commands/main.commands";
import ContentImprover from "./components/ContentImprover/main.content-improver";
import CreativeStory from "./components/CreativeStory/main.creative-story";
import YouTubeDescriptions from "./components/YouTubeDescriptions/main.youtube-descriptions";
import YouTubeTitles from "./components/YouTubeTitles/main.youtube-titles";
import YouTubeIdeas from "./components/YouTubeIdeas/main.youtube-ideas";
import YouTubeIntros from "./components/YouTubeIntros/main.youtube-intros";
import YouTubeOutlines from "./components/YouTubeOutlines/main.youtube-outlines";
import LandingPageHeadlines from "./components/LandingPageHeadlines/main.landing-page-headlines";
import ContentShortener from "./components/ContentShortener/main.content-shortener";
import StartupIdeas from "./components/StartupIdeas/main.startup-ideas";
import Image from "./components/Image/main.image";
import LinkedInAdDescriptions from "./components/LinkedInAdDescriptions/main.linkedin-ad-descriptions";
import LinkedInAdHeadlines from "./components/LinkedInAdHeadlines/main.linkedin-ad-headlines";
import SEOMetaTitle from "./components/SEOMetaTitle/main.seo-meta-title";
import SEOMetaDescriptions from "./components/SEOMetaDescriptions/main.seo-meta-descriptions";
import NewsHeadline from "./components/NewsHeadline/main.news-headline";
import Chatgpt from "./components/ChatGPT/main.chatgpt";

const App = () => {
  const {isAuthenticated, logout, user,loginWithRedirect} = useAuth0();
  return (
    
    <MainLayouts>
      <BrowserRouter>
        {/* <SidebarB /> */}
        <div className="flex">
          {/* <Sidebar /> */}
          <main className="">
            <Routes>
              <Route path="/" element={<Chatgpt />} />
              <Route path="/chat" element={<Chatgpt />} />
              <Route path="/ads" element={<Ads />} />
              <Route path="/text" element={<Textdashboard />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<Resetpassword />} />
              <Route path="/newpassword" element={<Newpasswordconfirm />} />
              <Route path="/google" element={<Google />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/mainui" element={<MainUi />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/amazonproductdescription" element={ <AmazonProductDescription />}/>
              <Route path="/amazonproductfeatures" element={ <AmazonProductFeatures />}/>
              <Route path="/blogpostoutline" element={ <BlogPostOutline />}/>
              <Route path="/blogsubheadline" element={ <BlogSubheadline />}/>
              <Route path="/businessname" element={ <BusinessName />}/>
              <Route path="/companybio" element={ <CompanyBio />}/>
              <Route path="/conclusionparagraph" element={ <ConclusionParagraph />}/>
              <Route path="/emailsubjectlines" element={ <EmailSubjectLines />}/>
              <Route path="/engagingquestions" element={ <EngagingQuestions />}/>
              <Route path="/eventpost" element={ <EventPost />}/>
              <Route path="/facebookadheadline" element={ <FacebookAdHeadline />}/>
              <Route path="/facebookadprimarytext" element={ <FacebookAdPrimaryText />}/>
              <Route path="/faqgenerator" element={ <FAQGenerator />}/>
              <Route path="/featuretobenefit" element={ <FeaturetoBenefit />}/>
              <Route path="/googleadsdescription" element={ <GoogleAdsDescription />}/>
              <Route path="/googleadsheadline" element={ <GoogleAdsHeadline />}/>
              <Route path="/googlemybusinessofferpost" element={ <GoogleMyBusinessOfferPost />}/>
              <Route path="/introparagraph" element={ <IntroParagraph />}/>
              <Route path="/marketingangles" element={ <MarketingAngles />}/>
              <Route path="/mybusinesspost" element={ <MyBusinessPost />}/>
              <Route path="/oneshortblogpost" element={ <OneShortBlogPost />}/>
              <Route path="/paragraphgenerator" element={ <ParagraphGenerator />}/>
              <Route path="/perfectheadline" element={ <PerfectHeadline />}/>
              <Route path="/personalizedcoldemails" element={ <PersonalizedColdEmails />}/>
              <Route path="/personallinkedlnpost" element={ <PersonalLinkedlnPost />}/>
              <Route path="/pinterestpindescription" element={ <PinterestPinDescription />}/>
              <Route path="/pinterestpintitle" element={ <PinterestPinTitle />}/>
              <Route path="/pollquestions" element={ <PollQuestions />}/>
              <Route path="/productdescription" element={ <ProductDescription />}/>
              <Route path="/productname" element={ <ProductName />}/>
              <Route path="/quoraanswers" element={ <QuoraAnswers />}/>
              <Route path="/reviewresponder" element={ <ReviewResponder />}/>
              <Route path="/ridiculousmarketingideas" element={ <RidiculousMarketingIdeas />}/>
              <Route path="/uniquevaluepropositions" element={ <UniqueValuePropositions />}/>
              <Route path="/sentence-expander" element={ <SentenceExpander />}/>
              <Route path="/press-release-title-and-intro" element={ <PressReleaseTitleandIntro />}/>
              <Route path="/explain-it-to-a-child" element={ <ExplainItToaChild />}/>
              <Route path="/personal-bio" element={ <PersonalBio />}/>
              <Route path="/persuasive-bullet-points" element={ <PersuasiveBulletPoints />}/>
              <Route path="/photo-post-captions" element={ <PhotoPostCaptions />}/>
              <Route path="/real-estate-listing" element={ <RealEstateListing />}/>
              <Route path="/tweet-machine" element={ <TweetMachine />}/>
              <Route path="/text-summarizer" element={ <TextSummarizer />}/>
              <Route path="/video-sales-letter" element={ <VideoSalesLetter />}/>
              <Route path="/tiktok-video-captions" element={ <TikTokVideoCaptions />}/>
              <Route path="/baby-name-generator" element={ <BabyNameGenerator />}/>
              <Route path="/video-script-hook-and-introduction" element={ <VideoScriptHookandIntroduction />}/>
              <Route path="/video-script-outline" element={ <VideoScriptOutline />}/>
              <Route path="/video-titles" element={ <VideoTitles />}/>
              <Route path="/video-topic-ideas" element={ <VideoTopicIdeas />}/>
              <Route path="/commands" element={ <Commands />}/>
              <Route path="/content-improver" element={ <ContentImprover />}/>
              <Route path="/creative-story" element={ <CreativeStory />}/>
              <Route path="/youtube-descriptions" element={ <YouTubeDescriptions />}/>
              <Route path="/youtube-titles" element={ <YouTubeTitles />}/>
              <Route path="/youtube-ideas" element={ <YouTubeIdeas />}/>
              <Route path="/youtube-intros" element={ <YouTubeIntros />}/>
              <Route path="/youtube-outlines" element={ <YouTubeOutlines />}/>
              <Route path="/landing-page-headlines" element={ <LandingPageHeadlines />}/>
              <Route path="/content-shortener" element={ <ContentShortener />}/>
              <Route path="/startup-ideas" element={ <StartupIdeas />}/>
              <Route path="/image" element={ <Image />}/>
              <Route path="/linkedin-ad-descriptions" element={ <LinkedInAdDescriptions />}/>
              <Route path="/linkedin-ad-headlines" element={ <LinkedInAdHeadlines />}/>
              <Route path="/seo-meta-title" element={ <SEOMetaTitle />}/>
              <Route path="/seo-meta-descriptions" element={ <SEOMetaDescriptions />}/>
              <Route path="/news-headline" element={ <NewsHeadline />}/>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </MainLayouts>
  );
};

export default App;
