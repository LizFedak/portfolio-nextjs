const projects = [
    {
      name: "Colorado Wildlife Encounters",
      description: `The mountain community of Nederland and surrounding area was experiencing a high number of mountain lion encounters and residents were on edge. Locals were compiling lists of locations for sightings, but it was hard to piece together where those locations mapped to due to the distance innate to mountain life. I created a map so locals could easily spot where lions had been most recently. The map included calculated color coding for sightings to pinpoint how recently a mountain lion encounter had occured.`,
      tools: "JavaScript, jQuery, Handlebars, CSS, Google Maps API",
      images: ["https://irp.cdn-website.com/530aeed4/dms3rep/multi/mountainlions.jpg"],
      url: "https://www.wildlifetrackercolorado.com/"
    }, 
    {
      name: "Eyravegur 34",
      description: "Light box svg highlight",
      tools: "JavaScript, jQuery, Handlebars, CSS, Bunny CDN, Airtable API",
      images: ["https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F70e0f0e3fc5bc2dffa6507c2d45292ad.cdn.bubble.io%2Ff1652961207560x668713719866347500%2Feyravegur-preview.jpg"],
      url: "https://www.eyravegur34.is/til-solu/eyravegur-34a"
    }, 
    {
      name: "Custom Eco-Product Search/Filte",
      description: "",
      tools: "JavaScript, jQuery, Handlebars, CSS, Bunny CDN, Airtable API",
      url: "https://www.zerowasted.co.uk/zero-wasted-best-buys",
      images: ["https://irp.cdn-website.com/530aeed4/dms3rep/multi/zerow.jpg"]
    },
    {
      name: "Vacation Rental Hostfully API Integration",
      description: "Mission Beach Villas had their search and booking flows isolated, causing their customers to have to click page by page until they found an available unit. Using Hostfully's booking API, I built out a search UI that queries results based on availability and selected criteria, so Mission Beach Villas could have more successful bookings and happier customers.",
      tools: "",
      url: "https://www.missionbeachvillas.com/listings",
      images: ["https://irp.cdn-website.com/530aeed4/dms3rep/multi/missionbeach.jpg"]
    },
    {
      name: "Reading Rock Nationwide Material Supplier Search",
      description: "Reading Rock's website was unmanagebale and broken. Reading Rock distributes hundreds of products nationwide, but the product they sell in each zip code is unique to the distributor serving the zip code and the customer type. They needed a complex filter option that would only render filter options based on the criteria for the zipcode and customer type. To quickly filter over thousands of available zip codes and data pairings, I brought in the data using a compressed data format. The rest is done via custom JavaScript classes. They also needed to change the displayed filters and keep dropdowns locked until earlier criteria were filled in, so I used JS event listeners to manipulate changes.",
      tools: "",
      url: "https://www.missionbeachvillas.com/listings",
      images: ["https://irp.cdn-website.com/530aeed4/dms3rep/multi/reading-rock.jpg"]
    },
    {
      name: "Hospital Network Resource Finder",
      description: `Plural Agency in Australia took on a hospital network client (PHN), and needed custom funcitonality built out to simplify how website visitors would access educational resources and materials. We collaborated from Boulder to Melbourne to create this new search experience. Plural Agency provided a design layout, and I handled all of the coding implementation. The widget includes autocomplete search and dropdowns for topic and type.`,
      tools: "JavaScript, jQuery, HTML, Handlebars, CSS",
      images: [],
      url: "https://www.semphn.org.au/services-and-resources"
    },
  ]

  export default projects;