import {ref} from 'vue'

export default function getWorks(){
  const works = ref ([
    {
      workID: 1,
      workTitle: "Hotel Website",
      workCategory: "UI Design",
      mockupImage: require("@/assets/hotel-mockup.png"),
      mockUpImageAlt: "Hotel Mockup",

      colors: [
        {
          colorID:  "#B98C87",
          styleBackground: {
            backgroundColor: "#B98C87",
          },
        },
        {
          colorID: "#674746",
          styleBackground: {
            backgroundColor: "#674746",
          },
          stylePosition:{
            position: "absolute",
            left: "80px"
          }
        },
        {
          colorID: "#E6746C",
          styleBackground: {
            backgroundColor: "#E6746C",
          },
          stylePosition:{
            position: "absolute",
            left: "160px"
          }
        }
      ],
      toolAdobeXD: true,
      toolAI: false,
     
      projectBrief: "CMS Hotel is a 5 star hotel that has 3 different room types. The objective of this project is to create a design that showcases the rooms, events, contact details and easy booking.",
      primaryFontStyle: {
        fontName: "Playfair Display",
        fontFamily: "font-family: 'Playfair Display', serif;",
        lowercaseAlphabet: true,
      },
      secondaryFontAvailable: true,
      secondaryFontStyle: {
        fontName: " Montserrat",
        fontFamily: "font-family: 'Montserrat', sans-serif;",
        lowercaseAlphabet: true,
      },
      pagesMockupImage:  require("@/assets/hotel-pages-mockup.jpg"),
      pagesMockupImageAlt: "Pages Image",
      onePageTitle: "Homepage",
      onePageImage: require("@/assets/hotel-homepage.jpg"),
      onePageImageAlt: "Homepage"
    },
    {
      workID: 2,
      workTitle: "Bicycle Website",
      workCategory: "UI Design",
      mockupImage: require("@/assets/bike-mockup.png"),
      mockUpImageAlt: "Bicycle Mockup",
      colors: [
        {
          colorID:  "#977453",
          styleBackground: {
            backgroundColor: "#977453",
          },
        },
        {
          colorID: "#070707",
          styleBackground: {
            backgroundColor: "#070707",
          },
          stylePosition:{
            position: "absolute",
            left: "80px"
          }
        }
      ],
      toolAdobeXD: true,
      toolAI: false,
      projectBrief:"Roar Bikes is a manufacturer of small run, contemporary bicycles sold exclusively from their own website. The objective of this project is to build an e-commerce website for people to browse & purchase.",
      primaryFontStyle: {
        fontName: "Bebas Neue",
        fontFamily: "font-family: 'Bebas Neue', cursive;",
        lowercaseAlphabet: false,
      },
      secondaryFontAvailable: true,
      secondaryFontStyle: {
        fontName: " Poppins",
        fontFamily: "font-family: 'Poppins', sans-serif;",
        lowercaseAlphabet: true,
      },
      pagesMockupImage:  require("@/assets/bike-pages-mockup.jpg"),
      pagesMockupImageAlt: "Pages Image",
      onePageTitle: "Homepage",
      onePageImage: require("@/assets/bike-homepage.jpg"),
      onePageImageAlt: "Homepage"
    },
    {
      workID: 3,
      workTitle: "Museum Website",
      workCategory: "UI Design",
      mockupImage: require("@/assets/museum-mockup.png"),
      mockUpImageAlt: "Museum Mockup",
      colors: [
        {
          colorID:  "#b89767",
          styleBackground: {
            backgroundColor: "#b89767",
          },
        },
        {
          colorID: "#000000",
          styleBackground: {
            backgroundColor: "#000000",
          },
          stylePosition:{
            position: "absolute",
            left: "80px"
          }
        }
      ],
      toolAdobeXD: true,
      toolAI: false,
      projectBrief:"Trapholt is a museum that visually presents exhibition of modern arts, with extensive collections of danish furniture. The object of this project is to redesign the existing website to make it more intuitive and user friendly.",
      primaryFontStyle: {
        fontName: "Poppins",
        fontFamily: "font-family: 'Poppins', sans-serif;",
        lowercaseAlphabet: true,
      },
      secondaryFontAvailable: false,
      pagesMockupImage:  require("@/assets/museum-pages-mockup.jpg"),
      pagesMockupImageAlt: "Pages Image",
      onePageTitle: "Homepage",
      onePageImage: require("@/assets/museum-homepage.jpg"),
      onePageImageAlt: "Homepage"
    },
    {
      workID: 4,
      workTitle: "Loan Tracker Website",
      workCategory: "UI Design",
      mockupImage: require("@/assets/loan-mockup.png"),
      mockUpImageAlt: "Loan Tracker  Mockup",
      colors: [
        {
          colorID:  "#27557A",
          styleBackground: {
            backgroundColor: "#27557A",
          },
        },
        {
          colorID: "#50AEFB",
          styleBackground: {
            backgroundColor: "#50AEFB",
          },
          stylePosition:{
            position: "absolute",
            left: "80px"
          }
        }
      ],
      toolAdobeXD: true,
      toolAI: false,
      projectBrief:"Loan Tracker is a solution to keep track of loans between families and friends. The objecive of this project is to create a secure and easy to use tracking system.",
      primaryFontStyle: {
        fontName: "Helvetica Neue",
        fontFamily: "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
        lowercaseAlphabet: true,
      },
      secondaryFontAvailable: false,
      pagesMockupImage:  require("@/assets/loan-pages-mockup.jpg"),
      pagesMockupImageAlt: "Pages Image",
      onePageTitle: "Homepage",
      onePageImage: require("@/assets/loan-homepage.jpg"),
      onePageImageAlt: "Homepage"
    },
    {
      workID: 5,
      workTitle: "Travel Blog Logo",
      workCategory: "Logo Design",
      mockupImage: require("@/assets/diy-mockup.png"),
      mockUpImageAlt: "Travel Logo Mockup",
      colors: [
        {
          colorID: "#231f20",
          styleBackground: {
            backgroundColor: "#231f20",
          }
        },
        {
          colorID: "#6a6eb3",
          styleBackground: {
            backgroundColor: "#6a6eb3",
          },
          stylePosition:{
            position: "absolute",
            left: "80px"
          }
        },
        {
          colorID: "#f27069",
          styleBackground: {
            backgroundColor: "#f27069",
          },
          stylePosition:{
            position: "absolute",
            left: "160px"
          }
        }
      ],
      toolAdobeXD: false,
      toolAI: true,
      projectBrief:"DIY Trippers is a travel blog that shares travel guides. The goal of this project is to showcase the identity of the bloggers as being in the outdoor and seeking for adventure.",
      primaryFontStyle: {
        fontName: "Roboto",
        fontFamily: "font-family: 'Roboto', sans-serif;",
        lowercaseAlphabet: true,
      },
      secondaryFontAvailable: false,
      pagesMockupImage:  require("@/assets/diy-stationery.jpg"),
      pagesMockupImageAlt: "Mockup Stationery",
      onePageTitle: "Logo Variations",
      onePageImage: require("@/assets/diy-variations.jpg"),
      onePageImageAlt: "Logo Variations"
    }
  ])

  return{
    works
  }
}