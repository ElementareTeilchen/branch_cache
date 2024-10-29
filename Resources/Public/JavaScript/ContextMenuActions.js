/**
 Module: @branch_cache/ContextMenuActions
 *
 * @exports @branch_cache/ContextMenuActions
 */

class ContextMenuActions {

	/**
	 * @param {string} table
	 * @param {int} uid of the page
	 */
	clearBranchCache = function(table, uid) {
		if (table === 'pages') {
			var url = TYPO3.settings.ajaxUrls['clear_branch_cache'];
			url += '&id=' + uid;

      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
          var message = JSON.parse(xmlhttp.responseText);
          if (xmlhttp.status == 200) {
            top.TYPO3.Notification.success(message['title']);
          }
          else {
            top.TYPO3.Notification.error(message['title']);
          }
        }
      };

      xmlhttp.open("GET", url, true);
      xmlhttp.send();
		}
	};
}

export default new ContextMenuActions();
