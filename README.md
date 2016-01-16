# RSSGen is a Meteor package that generates a RSS xml file

**RSSGen generates Rich Site Summary, RSS, to a XML file from a mongo collection or other object array.**
The goal of RSSGen is to be flexible but extremely straightforward to use and to configure

## About version 1.0.0
**In this version of RSSGen, the code is wrapped in an IIFE to be more robust.**
*Options can not be configured directly (except source option) and it's not compatible with earlier versions (sorry for the inconvenience), but this version tries to be more robust and simpler to use*

## How to install
```sh
meteor add pedromendonka:rssgen
```

## How to use RSSGen

**Pass your RSSGen configuration options through an object**
```javascript
    var myRSSGenOptions = {
        // Your channel title
        title: 'RSSGen posts',
        // Main link of your channel
        link: 'https://atmospherejs.com/pedromendonka/rssgen',
        // Channel description
        description: 'RSS simple generator',
        /*
        The source for the channel items based on a mongo collection.
        MONGODB COLLECTION SHOULD HAVE A 'title' and 'body' FIELD
        >>>>>>>>>>> for item's title and description <<<<<<<<<<<<
        */
        source: MyMongoCollection.find().fetch(),
        /*
        The path to put your generated RSS file
        Normally [public] folder to be an accessible asset
        Make sure the path you choose exists,
        otherwise the file will be placed in your App root path
        */
        outputDir: '/public/rss/',
        /*
        The file name to generate RSS
        Make sure the file has the xml extension,
        Otherwise RSS readers can't read it
        */
        outputFile: 'my_rss_output.xml'
    }

```

**On the server side of your Meteor project just instantiate RSSGen passing your config options**
```javascript
    var myRSSGen = RSSGen(myRSSGenOptions);    // This param can be set later

```

**You can set your options later if don't want to pass it as an argument when creating your RSSGen instance using the setConf() method**
```javascript
    myRSSGen.setConf(myRSSGenOptions);
    // Or in a single line with method chaining
    myRSSGen.setConf(myRSSGenOptions).generate();

```

**You can check your rssData calling the generateRssData() method**
```javascript
    console.log(myRSSGen.generateRssData());

```

**On the server generate your RSS whenever you update your Collection**
```javascript
    // This will create a file to your chosen RSS path in .xml format
    myRSSGen.generate();

```

**Alternatively You can set the data source without messing with the other config options**
```javascript
    // Fetch your data from a mongo collection or from an object array
    var myDataSource = MyMongoCollection.find().fetch();
    // Set the new RSSGen data source option
    myRSSGen.setSource(myDataSource);
    // Generate new file with the new source setSource
    myRSSGen.generate();

    // Or in a single line with method chaining
    myRSSGen.setSource(myDataSource).generate();

```

*Thanks for using | Any bug or error please drop me a line*
