// in gastby-browser.js
exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
  }) => {
    const { pathname } = location
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/`, `/what-we-do`, `/services`, `/projects`, `/about`, `/blog`]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
      document.getElementById("mainish").scrollIntoView()
    }
    
    return false
  }
  
  