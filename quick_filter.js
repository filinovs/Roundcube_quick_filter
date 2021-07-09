/**
 * Quick Filter plugin script
 **/

if (window.rcmail) {
  rcmail.addEventListener("init", function (evt) {
    // create custom button
    var button = $("<A>")
      .attr("id", "rcmFlaggedButton")
      .html(rcmail.gettext("flagged", "quick_filter"));
    button.bind("click", function (e) {
      return rcmail.command("plugin.filter_flugged", this);
    });

    // add and register
    rcmail.add_element(button, "toolbar");
    rcmail.register_button("plugin.filter_flugged", "rcmFlaggedButton", "link");
    rcmail.register_command("plugin.filter_flugged", qf_handler, true);
  });
}

qf_handler = function () {
  document.getElementById("searchfilter").value = "ALL";
  return rcmail.command("search");
};
