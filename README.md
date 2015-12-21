# RSSGen is a Meteor package that generates a RSS xml file

**RSSGen generates Rich Site Summary, RSS, to a XML file from a mongo collection.**
**The goal of RSSGen is to be flexible but extremely straightforward to use and to configure**


## How to install
```sh
meteor add pedromendonka:rssgen
```

## How to use RSSGen

**On the server side of your Meteor project just instantiate RSSGen**
```javascript
var myRSSGen = new RSSGen();

```
**Configure your RSSGen instance**
```javascript
    // Your channel title
    myRSSGen.title: 'RSSGen posts',
    // Main link of your channel
    myRSSGen.link: 'https://atmospherejs.com/pedromendonka/rssgen',
    // Channel description
    myRSSGen.description: 'RSS simple generator',
    /*
    The source for the channel items based on a mongo collection.
    MONGODB COLLECTION SHOULD HAVE A 'title' and 'body' FIELD
    >>>>>>>>>>> for item's title and description <<<<<<<<<<<<
    */
    myRSSGen.source: MyMongoCollection.find().fetch(),
    /*
    The path to put your generated RSS file
    Normally [public] folder to be an accessible asset
    Make sure the path you choose exists,
    otherwise the file will be placed in your App root path
    */
    myRSSGen.outputDir: '/public/rss/',
    /*
    The file name to generate RSS
    Make sure the file has the xml extension,
    Otherwise RSS readers can't read it
    */
    myRSSGen.outputFile: 'my_rss_output.xml'

```
**On the server generate your RSS whenever you update your Collection**
```javascript
myRSSGen.generate();

```
