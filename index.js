var http = require('http');
var fs = require('fs');
var xml2js = require('xml2js');
var url = require('url');

const parser = new xml2js.Parser({ attrkey: "attr" });

var messageObjects;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true);
    switch (q.pathname) {
        case "/":
            var data = fs.readFileSync("./index.html");
            res.write(data);
            break;
        case "/ebn":
            var system = "ebn";
            res.write('<!DOCTYPE html><html><head><style>body {padding:10px;}</style><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><script src="https://kit.fontawesome.com/500da070c3.js" crossorigin="anonymous"></script></head><body>')
            var messages = getMessages(system);

            res.write('<div class="card"><div class="card-body">');
            res.write('<h1 class="card-title">EBN Messages</h1>');
            res.write('<div class="table-responsive"><table class="table">');
            res.write('<thead><tr>');
            res.write('<th scope="col">#</th>');
            res.write('<th scope="col">Label</th>');
            res.write('<th scope="col">Copy</th>');
            res.write('<th scope="col">Appear Date</th>');
            res.write('<th scope="col">Appear Time</th>');
            res.write('<th scope="col">Expire Date</th>');
            res.write('<th scope="col">Expire Time</th>');
            res.write('<th scope="col">Actions</th>');
            res.write('</tr></thead>')
            res.write('<tbody>');
            messages.forEach(function(value, index, array) {

                res.write('<tr>');
                res.write(`<td scope="row">${index+1}</td>`);
                res.write(`<td>${value.label}</td>`);
                res.write(`<td>${value.copy}</td>`);
                res.write(`<td>${value.appearDate}</td>`);
                res.write(`<td>${value.appearTime}</td>`);
                res.write(`<td>${value.expireDate}</td>`);
                res.write(`<td>${value.expireTime}</td>`);
                res.write('<td style="min-width:30px;">');

                // edit button
                res.write('<form action="/edit" method="GET" style="display:inline-block">');
                res.write(`<input type="hidden" name="system" value="${system}"/>`);
                res.write(`<input type="hidden" name="index" value="${index}"/>`);
                res.write('<button type="submit" title="Edit" style="background:transparent;border:none;cursor:pointer;padding:0;padding-right:5px"><i class="fas fa-pencil-alt text-primary"></i></button>');
                res.write('</form>');

                // delete button
                res.write('<form action="/delete" method="GET" style="display:inline-block">');
                res.write(`<input type="hidden" name="system" value="${system}"/>`);
                res.write(`<input type="hidden" name="index" value="${index}"/>`);
                res.write('<button type="submit" title="Delete" style="background:transparent;border:none;cursor:pointer;"><i class="fas fa-trash-alt text-danger"></i></button>');
                res.write('</form>');

                res.write('</td>');
                res.write('</tr>');
            
            });
            res.write('</tbody>');
            res.write('</table>');
            res.write('<div class="btn-group">');
            res.write('<a href="/" class="btn btn-outline-primary">Home</a>');
            res.write(`<a href="/reset?system=${system}&redirect=true" class="btn btn-outline-danger">Reset to Default</a>`);
            res.write('</div>');
            res.write('<div class="btn-group" style="margin-left: 10px;">');
            res.write(`<form action="/create" method="GET">`);
            res.write(`<input type="hidden" name="system" value="${system}"/>`);
            res.write(`<button type="submit" class="btn btn-primary">Create Message</button>`);
            res.write('</form>');
            res.write('</div>');
            res.write('</div></div></div>');
            res.write("</body></html>");
            break;
        case "/sep":
            var system = "sep";
            res.write('<!DOCTYPE html><html><head><style>body {padding:10px;}</style><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><script src="https://kit.fontawesome.com/500da070c3.js" crossorigin="anonymous"></script></head><body>')
            var messages = getMessages(system);

            res.write('<div class="card"><div class="card-body">');
            res.write('<h1 class="card-title">EBN Messages</h1>');
            res.write('<div class="table-responsive"><table class="table">');
            res.write('<thead><tr>');
            res.write('<th scope="col">#</th>');
            res.write('<th scope="col">Label</th>');
            res.write('<th scope="col">Copy</th>');
            res.write('<th scope="col">Appear Date</th>');
            res.write('<th scope="col">Appear Time</th>');
            res.write('<th scope="col">Expire Date</th>');
            res.write('<th scope="col">Expire Time</th>');
            res.write('<th scope="col">Actions</th>');
            res.write('</tr></thead>')
            res.write('<tbody>');
            messages.forEach(function(value, index, array) {

                res.write('<tr>');
                res.write(`<td scope="row">${index+1}</td>`);
                res.write(`<td>${value.label}</td>`);
                res.write(`<td>${value.copy}</td>`);
                res.write(`<td>${value.appearDate}</td>`);
                res.write(`<td>${value.appearTime}</td>`);
                res.write(`<td>${value.expireDate}</td>`);
                res.write(`<td>${value.expireTime}</td>`);
                res.write('<td style="min-width:30px;">');

                // edit button
                res.write('<form action="/edit" method="GET" style="display:inline-block">');
                res.write(`<input type="hidden" name="system" value="${system}"/>`);
                res.write(`<input type="hidden" name="index" value="${index}"/>`);
                res.write('<button type="submit" title="Edit" style="background:transparent;border:none;cursor:pointer;padding:0;padding-right:5px"><i class="fas fa-pencil-alt text-primary"></i></button>');
                res.write('</form>');

                // delete button
                res.write('<form action="/delete" method="GET" style="display:inline-block">');
                res.write(`<input type="hidden" name="system" value="${system}"/>`);
                res.write(`<input type="hidden" name="index" value="${index}"/>`);
                res.write('<button type="submit" title="Delete" style="background:transparent;border:none;cursor:pointer;"><i class="fas fa-trash-alt text-danger"></i></button>');
                res.write('</form>');

                res.write('</td>');
                res.write('</tr>');
            
            });
            res.write('</tbody>');
            res.write('</table>');
            res.write('<div class="btn-group">');
            res.write('<a href="/" class="btn btn-outline-primary">Home</a>');
            res.write(`<a href="/reset?system=${system}&redirect=true" class="btn btn-outline-danger">Reset to Default</a>`);
            res.write('</div>');
            res.write('<div class="btn-group" style="margin-left: 10px;">');
            res.write(`<form action="/create" method="GET">`);
            res.write(`<input type="hidden" name="system" value="${system}"/>`);
            res.write(`<button type="submit" class="btn btn-primary">Create Message</button>`);
            res.write('</form>');
            res.write('</div>');
            res.write('</div></div></div>');
            res.write("</body></html>");
            break;
        case "/edit":
            var qdata = q.query;
            var system = qdata.system;
            var index = qdata.index;
            var messages = getMessages(system);
            res.write('<!DOCTYPE html><html><head><style>body {padding:10px;}</style><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><script src="https://kit.fontawesome.com/500da070c3.js" crossorigin="anonymous"></script></head><body>');
            res.write(`<div class="card"><div class="card-body">`);
            res.write('<h1 class="card-title">Edit</h1>');
            res.write('<form action="/save" method="GET" id="edit-form">');
            // label
            res.write('<div class="form-group">');
            res.write('<label for="labelInput">Label</label>');
            res.write(`<input type="text" class="form-control" id="labelInput" name="label" value="${messages[index].label}">`);
            res.write('</div>');

            // copy
            res.write('<div class="form-group">');
            res.write('<label for="copyInput">Copy</label>');
            res.write(`<textarea class="form-control" id="copyInput" name="copy">${messages[index].copy}</textarea>`);
            res.write('</div>');

            // appear date
            res.write('<div class="form-group">');
            res.write('<label for="appearDateInput">Appear Date</label>');
            res.write(`<input type="date" class="form-control" id="appearDateInput" name="appearDate" value="${messages[index].appearDate}">`);
            res.write('</div>');

            // appear time
            res.write('<div class="form-group">');
            res.write('<label for="appearTimeInput">Appear Time</label>');
            res.write(`<input type="time" step="1" class="form-control" id="appearTimeInput" name="appearTime" value="${messages[index].appearTime}">`);
            res.write('</div>');

            // expire date
            res.write('<div class="form-group">');
            res.write('<label for="expireDateInput">Expire Date</label>');
            res.write(`<input type="date" class="form-control" id="expireDateInput" name="expireDate" value="${messages[index].expireDate}">`);
            res.write('</div>');

            // expire time
            res.write('<div class="form-group">');
            res.write('<label for="expireTimeInput">Expire Time</label>');
            res.write(`<input type="time" step="1" class="form-control" id="expireTimeInput" name="expireTime" value="${messages[index].expireTime}">`);
            res.write('</div>');

            res.write(`<input type="hidden" name="system" value="${system}"/>`);
            res.write(`<input type="hidden" name="index" value="${index}"/>`);

            res.write('</form>');

            res.write('<div class="btn-group">');
            res.write(`<a href="/${system}" class="btn btn-outline-secondary">Cancel</a>`);
            res.write(`<button href="/save" class="btn btn-outline-primary" type="submit" form="edit-form">Save</button>`);
            res.write('</div>');

            res.write('</div></div>');
            res.write('</body></html>');
            break;
        case "/create":
            var qdata = q.query;
            var system = qdata.system;
            var messages = getMessages(system);
            res.write('<!DOCTYPE html><html><head><style>body {padding:10px;}</style><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><script src="https://kit.fontawesome.com/500da070c3.js" crossorigin="anonymous"></script></head><body>');
            res.write(`<div class="card"><div class="card-body">`);
            res.write('<h1 class="card-title">Create New</h1>');
            res.write('<form action="/save" method="GET" id="create-form">');
            // label
            res.write('<div class="form-group">');
            res.write('<label for="labelInput">Label</label>');
            res.write(`<input type="text" class="form-control" id="labelInput" name="label" required>`);
            res.write('</div>');

            // copy
            res.write('<div class="form-group">');
            res.write('<label for="copyInput">Copy</label>');
            res.write(`<textarea class="form-control" id="copyInput" name="copy" required></textarea>`);
            res.write('</div>');

            // appear date
            res.write('<div class="form-group">');
            res.write('<label for="appearDateInput">Appear Date</label>');
            res.write(`<input type="date" class="form-control" id="appearDateInput" name="appearDate" required>`);
            res.write('</div>');

            // appear time
            res.write('<div class="form-group">');
            res.write('<label for="appearTimeInput">Appear Time</label>');
            res.write(`<input type="time" step="1" class="form-control" id="appearTimeInput" name="appearTime" required>`);
            res.write('</div>');

            // expire date
            res.write('<div class="form-group">');
            res.write('<label for="expireDateInput">Expire Date</label>');
            res.write(`<input type="date" class="form-control" id="expireDateInput" name="expireDate" required>`);
            res.write('</div>');

            // expire time
            res.write('<div class="form-group">');
            res.write('<label for="expireTimeInput">Expire Time</label>');
            res.write(`<input type="time" step="1" class="form-control" id="expireTimeInput" name="expireTime" required>`);
            res.write('</div>');

            res.write(`<input type="hidden" name="system" value="${system}"/>`);

            res.write('</form>');

            res.write('<div class="btn-group">');
            res.write(`<a href="/${system}" class="btn btn-outline-secondary">Cancel</a>`);
            res.write(`<button href="/save" class="btn btn-outline-primary" type="submit" form="create-form">Save</button>`);
            res.write('</div>');

            res.write('</div></div>');
            res.write('</body></html>');
            break;
        case "/save":
            var qdata = q.query;
            var system = qdata.system;
            var message = {};
            message.system = qdata.system;
            message.label = qdata.label;
            message.copy = qdata.copy;
            message.appearDate = qdata.appearDate;
            message.appearTime = qdata.appearTime;
            message.expireDate = qdata.expireDate;
            message.expireTime = qdata.expireTime;
            if (message.appearTime.length == 5) {
                message.appearTime += ":00";
            }
            if (message.expireTime.length == 5) {
                message.expireTime += ":00";
            }
            var oldMessages = getMessages(system);
            var newMessages = [];
            
            if (qdata.index !== undefined) {
                message.index = qdata.index;
                oldMessages.forEach(function(value, index, array) {
                    if (value.index != message.index) {
                        newMessages.push(value);
                    } else {
                        var v = value;
                        v.system = message.system;
                        v.label = message.label;
                        v.copy = message.copy;
                        v.appearDate = message.appearDate;
                        v.appearTime = message.appearTime;
                        v.expireDate = message.expireDate;
                        v.expireTime = message.expireTime;
                        newMessages.push(v);
                    }
                });
            } else {
                newMessages = oldMessages;
                var v = {};
                v.system = message.system;
                v.label = message.label;
                v.copy = message.copy;
                v.appearDate = message.appearDate;
                v.appearTime = message.appearTime;
                v.expireDate = message.expireDate;
                v.expireTime = message.expireTime;
                newMessages.push(v);
            }
            
            writeXML(system, newMessages);
            res.writeHead(302, {Location: `/${system}`});
            break;
        case "/delete":
            var qdata = q.query;
            var system = qdata.system;
            var messageIndex = parseInt(qdata.index);
            messageObjects = getMessages(system);
            tempMessageObjects = [];
            messageObjects.forEach(function(value, index, array) {
                
                if (value.index != messageIndex) {
                    tempMessageObjects.push(value);
                }
            });
            console.log(tempMessageObjects);
            writeXML(system, tempMessageObjects);
            if (system == "ebn") {
                res.writeHead(302, {Location: "/ebn"});
            } else if (system == "sep") {
                res.writeHead(302, {Location: "/sep"});
            }
            break;
        case "/reset":
            var qdata = q.query;
            var system = qdata.system;
            var redirect = qdata.redirect;
            var success = resetXML(system);
            if (redirect == "true") {
                if (success === true) {
                    res.writeHead(302, {Location: `/${system}`});
                } else {
                    res.write('<h1 style="color:red">Write Fail</h1>');
                    res.write('<p>Error message/s shown below:<p>');
                    success.forEach(function(value, index, array) {
                        res.write(`<p><code>${value}</code></p>`);
                    });
                    res.write("<hr>");
                    res.write('<a href="/">Return to Home</p>');
                }
            } else {
                if (success === true) {
                    res.write('<h1 style="color:lightgreen">Write Success!</h1>');
                    if (system == "both") {
                        res.write("<p>Successful reset of both systems.</p>");
                    } else {
                        res.write(`<p>Successful reset of system ${system}.</p>`);
                    }
                } else {
                    res.write('<h1 style="color:red">Write Fail</h1>');
                    res.write('<p>Error message/s shown below:<p>');
                    success.forEach(function(value, index, array) {
                        res.write(`<p><code>${value}</code></p>`);
                    });
                }
                res.write("<hr>");
                res.write('<a href="/">Return to Home</p>');
            }
    }
    res.end();
}).listen(5666);

function getXMLData(system) {
    var patb;
    if (system == "ebn") {
        path = "./xml/ebn/GlobalAlerts.xml";
    } else if (system == "sep") {
        path = "./xml/sep/GlobalAlerts.xml";
    } else {
        throw Error("System must be either ebn or sep.");
    }

    var xmlString = fs.readFileSync(path, "utf-8");
    let xmlData;
    parser.parseString(xmlString, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            xmlData = result;
        }
    });
    return xmlData;
}

function writeXML(system, messages) {
    var xmlString = '';
    xmlString += '<root xsi:schemaLocation="http://ebenefits.va.gov ScheduledMessage.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://ebenefits.va.gov">';

    messages.forEach(function(value, index, array) {
        xmlString += '<message>';
        
        xmlString += `<label><![CDATA[${value.label}]]></label>`;
        xmlString += `<copy><![CDATA[${value.copy}]]></copy>`;
        xmlString += `<appearDate><![CDATA[${value.appearDate}]]></appearDate>`;
        xmlString += `<appearTime><![CDATA[${value.appearTime}]]></appearTime>`;
        xmlString += `<expireDate><![CDATA[${value.expireDate}]]></expireDate>`;
        xmlString += `<expireTime><![CDATA[${value.expireTime}]]></expireTime>`;

        xmlString += '</message>';
    });

    // ending
    xmlString += '</root>';

    switch (system) {
        case "ebn":
            fs.writeFile("./xml/ebn/GlobalAlerts.xml", xmlString, function(err) {
                if (err) { console.log(err) }
                else { console.log("write success for system ebn")}
            });
            break;
        case "sep":
            fs.writeFile("./xml/sep/GlobalAlerts.xml", xmlString, function(err) {
                if (err) {console.log(err) }
                else { console.log("write success for system sep")}
            });
    }
}
function getMessages(system) {
    var data = getXMLData(system);
    var messages = data.root.message;
    if (messages === undefined) {
        return [];
    }
    messageObjects = [];
    messages.forEach(function(value, index, array) {
        var messageObject = {
            index: index,
            system: system,
            label: value.label[0],
            copy: value.copy[0],
            appearDate: value.appearDate[0],
            appearTime: value.appearTime[0],
            expireDate: value.expireDate[0],
            expireTime: value.expireTime[0]
        };
        messageObjects.push(messageObject);
    });
    return messageObjects;
}

function resetXML(system) {
    var resetFileData = fs.readFileSync("./xml/GlobalAlerts-Reset.xml", "utf-8");
    let resetSuccess = true;
    let resetFailMessage = [];
    if (system == "ebn") {
        fs.writeFile("./xml/ebn/GlobalAlerts.xml", resetFileData, function (err) {
            if (err) {
                resetSuccess = false;
                resetFailMessage.push(err.message);
            }
        });
    } else if (system == "sep") {
        fs.writeFile("./xml/sep/GlobalAlerts.xml", resetFileData, function (err) {
            if (err) {
                resetSuccess = false;
                resetFailMessage.push(err.message);
            }
        });
    } else {
        fs.writeFile("./xml/ebn/GlobalAlerts.xml", resetFileData, function (err) {
            if (err) {
                resetSuccess = false;
                resetFailMessage.push(err.message);
            }
        });
        fs.writeFile("./xml/sep/GlobalAlerts.xml", resetFileData, function (err) {
            if (err) {
                resetSuccess = false;
                resetFailMessage.push(err.message);
            }
        });
    }
    if (!resetSuccess) {
        return resetFailMessage;
    } else {
        return true;
    }
    
}