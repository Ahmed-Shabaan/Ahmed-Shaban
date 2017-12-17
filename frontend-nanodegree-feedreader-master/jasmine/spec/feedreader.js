/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    "use strict";
	describe('RSS Feeds', function(){
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has defined url and not empty url', function() {
            allFeeds.forEach((feed)=>{
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
         });   
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has defined name and and not empty name', function(){
            for(var name in allFeeds) {
            expect(allFeeds[name].name).toBeDefined();
            expect(allFeeds[name].name.length).not.toBe(0);
            }
        });
    });


    /* Write a new test suite named "The menu" */

    describe('the Menu', function() {
        
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         //when page loads check to see if body has .menu-hidden
		var menuHidden = $('body').hasClass('menu-hidden');
         it('menu is hidden', function() {
			
            expect(menuHidden).toBeDefined();
            expect(menuHidden).toBe(true);
         });
         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('The menu changes in visibility', function() {
            var menuIconList = $('.menu-icon-link');
			  menuIconList.click();
            
			  expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIconList.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
      });
	
    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function (done) {
            loadFeed(0, done);
        });
         
         //check to see if At least once feed entry 
         it('feed container has At least once entry', function() {
            var entry = document.querySelectorAll('.feed .entry');
            expect(entry.length).not.toBe(0);
         });
    });
    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var feedSelction1;
        var feedSelction2;
        
		//beforeEach Function
		beforeEach(function(done) {
            loadFeed(0, function() {
                feedSelction1 = document.querySelector('.feed').innerHTML;
                loadFeed(1, function() {
                    done();
                });
            });        
         });

        //afterEach Function
        afterEach(function() {
            loadFeed(0);
        });

         it('Feed content change on menu selected', function() {
            expect(feedSelction1).toBeDefined();
            feedSelction2 = document.querySelector('.feed').innerHTML;
            expect(feedSelction2).toBeDefined();
            expect(feedSelction1).not.toBe(feedSelction2);
         }); 
    });     
}());
