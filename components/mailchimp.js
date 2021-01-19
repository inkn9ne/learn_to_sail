import $ from "jquery";
import { findDOMNode } from "react-dom";

export default function Mailchimp(props) {
  const jQuery = $;
  <script
    type="text/javascript"
    src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
  ></script>;
  (function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = "EMAIL";
    ftypes[0] = "email";
    fnames[1] = "FNAME";
    ftypes[1] = "text";
    fnames[2] = "LNAME";
    ftypes[2] = "text";
    fnames[3] = "ADDRESS";
    ftypes[3] = "address";
    fnames[4] = "PHONE";
    ftypes[4] = "phone";
    fnames[5] = "BIRTHDAY";
    ftypes[5] = "birthday";
  })(jQuery);
  var $mcj = jQuery.noConflict(true);

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ahoy and welcome to learn to sail online.
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              Dou you like to learn sailing? So we are happy to tell you that
              you are at the right place. We are currently working on an amazing
              app with where you can learn everything you need to learn sailing.
              Our online sailing courses will be launched soon! Sign up now and
              get an early-bird discount of 50% for the first year!
            </p>

            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <form
              action="https://online.us7.list-manage.com/subscribe/post?u=0dac6271afd5a45603b81b31a&amp;id=11f2ffc56a"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              target="_blank"
              novalidate
            >
              <div className="mc-field-group">
                <label
                  htmlFor="mce-FNAME"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name{" "}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    value=""
                    name="FNAME"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    id="mce-FNAME"
                    autocomplete="given-name"
                  />
                </div>
              </div>

              <div className="mc-field-group">
                <label
                  htmlFor="mce-LNAME"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  value=""
                  name="LNAME"
                  className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  id="mce-LNAME"
                  autocomplete="family-name"
                />
              </div>

              <div class="mc-field-group sm:col-span-2">
                <label
                  htmlFor="mce-EMAIL"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address <span class="asterisk">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    id="mce-EMAIL"
                    autocomplete="email"
                  />
                </div>
              </div>

              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display:none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display:none"
                ></div>
              </div>

              <div className="text-right sm:col-span-2">
                <div
                  style="position: absolute; left: -5000px;"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_0dac6271afd5a45603b81b31a_11f2ffc56a"
                    tabindex="-1"
                    value=""
                  ></input>
                </div>
                <button
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
