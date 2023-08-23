let products = [
    {
      name: "Custom Authentication Suite",
      description: `When it comes to adding membership functionality to static site builders, most solutions charge 5% transaction fees, or they are not that extensible. However, most agencies that are adding authentication to their websites needed special customizations, like free trials, multiple tiers, dynamically edited profiles, and more. This feature set was missing from the Duda ecosystem, so I built out a custom integration that I could fully customize as needed depending on each agency's use case.
  For example, some agencies need the sign up to trigger the automatic deployment and assignment of a new website, so I integrated an API flow that triggers the required account creation, site creation, and assignment within the website builder ecosystem.
  Other users needed to bulk sell licenses that could be used for employees to register and gain access to pay wall content.Another use case involved simply requiring a login on top of paywall content so that a fraction of content was visible, but the rest was only visible if you were logged in, or marketing collateral could only be downloaded if you were authenticated for lead gen purposes.`,
      tags: [
        "Supabase API",
        "Google Cloud Serverless Functions",
        "JavaScript",
        "HTML",
        "Handlebars",
        "CSS"
      ],
      images: ["/images/auth.jpg"],
      url: "/custom-authentication-suite",
      shortdescription: "I built out a custom Supabase authentication suite for Duda/static site builders. Each implementation is different, but I've integrated Stripe membership checkout, Stripe multiple product checkouts, free sign ups, and protected content configurations."
    },
    {
      name:"AIO Filter Builder",
      description: `Agencies ask nearly weekly in this web agency niche how they can create a custom directory with membership and listing edits, so I created a set of products as a solution. The All-in-One Filter Widget was crafted for ease of use and is highly flexible so it can meet the needs of most use cases that come up. Users manage their data in Airtable or Google Sheets, and the widget renders a full filter widget with interactivity for their website.
  
  I designed a custom filter library that is used for end users to fully tailor their search experience dynamically based on their data set. They can configure options for multiple select, single select, number ranges, date pickers, and tags. As most of the users are non-technical, they just need to connect to their spreadsheet and identify what types of filters to use. From there, I calculate and render all of the options in the back end.
  
  On the live site, filters are saved live via URL parameters. Results udpate instantly as they are filtered.
  
  Custom add-ons are available, like API flows to update all images to a CDN and optimize them with webp for the web or resize them for mobile, process geographic information to output latitude and longitude coordinates for mapping, and to provide self-edit listings with user authentication.
  
  Overall, this is an easy-to-use directory builder for displaying data visually with filter, search, and print functionality. Whether you're looking to create a location-search map, product listing page, business directory, member directory, event listings, blog site, real estate listing page, or job listing page, this solution makes it easy to showcase your data in style on your websites.`,
      tags: [
        "Google Cloud Serverless Functions",
        "Airtable",
        "Google Maps JavaScript API",
        "Google Maps Places API",
        "jQuery",
        "JavaScript",
        "HTML",
        "Handlebars",
        "CSS",
        "React - In progress migration",
        "Tailwind CSS - In progress migration"
      ],
      images: ["https://irp.cdn-website.com/530aeed4/dms3rep/multi/filter.png","https://irp.cdn-website.com/530aeed4/dms3rep/multi/mapExample.svg"],
      url: "https://www.widgetpro.io/dynamic-widgets/all-in-one-filter-widget",
      shortdescription: `I created the All-in-One Filter Builder for web agencies, enabling easy custom directory setup using Airtable or Google Sheets as a database. Interactive, user-friendly, and adaptable for diverse content presentations with optional add-ons.`
    },
    {
      name: "Airtable as a Headless Blog Solution",
      tags: [
        "Airtable",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      images: ["https://lirp.cdn-website.com/530aeed4/dms3rep/multi/opt/airtable2-1920w.png"],
      description: `This solution was built for web agencies to optimize the time it takes to publish content for their clients. Rather than updating endless site pages with new user content, agencies can have their clients edit listings in Airtable, then set up a dynamic page that renders their content. The specific aspect I developed is a widget that reads in and processes Airtable's flavor of Markdown, and outputs it on the site as HTML. The user can then fully stylize all of the H1, H2, H3, p, list, and other elements that are output. Additionally I provided syntax that users could use to add media content inline. This removes the complexity of users needing to learn complicated tags and gives them a rapid development option.
  To round out the solution, I created an RSS feed generator that uses Google Cloud's serverless functions to generate an RSS feed from Airtable via Airtable's API. It then updates a JSON file stored via CDN on a cron schedule, or via a user triggering the update process after adding a new post or modifying content.
  For additional blog styling, I created widgets that dynamically output data about the blog post, including author and publish date information.
  The original headache that web agencies faced included limited blog post pages on their websites due to platform limitations, lack of permission controls in adding users to the website to edit blog posts, and more. This solution alleviates all of those issues by creating a separate publish environment for blog content.`,
  url: "https://www.widgetpro.io/dynamic-widgets/airtable-dynamic-rich-text-converter",
  shortdescription: "Revolutionizes agency workflows: Airtable-based solution empowers easy blog updates, controlled contributor access, Markdown conversion with custom widget, and seamless styling for enhanced web content management."
    },
    {
      name: "Dynamic DataTables Integration",
      tags: [
        "JavaScript",
        "DataTables Library",
        "CSS"
      ],
      images: ["/images/dattables.png"],
      description: ``,
  url: "https://www.widgetpro.io/dynamic-widgets/connected-data-table",
  shortdescription: "Instantly customize data in a responsive table using the Dynamic DataTables widget. Highlighted features: customization of controls, print and copy options, flexible column order, and dynamic date and print content for layouts."
    },
    {
      name: "Dynamic Calendar",
      tags: [
        "FullCalendar Library",
        "Add To Calendar Library",
        "JavaScript"
      ],
      images: ["/images/cal.png"],
      description: ``,
  url: "https://www.widgetpro.io/dynamic-calendar-widget",
  shortdescription: "A versatile calendar integrates Airtable, Google Sheets, and custom databases, showcasing all-day, timed, and multi-day events. Various views (calendar, pinboard, agenda), customizable defaults, search, and filters enhance event management."
    }
  ]

export default products;