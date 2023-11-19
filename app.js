const fs = require('fs');
const args = process.argv.slice(2);

if(args.length !== 2)
{
  console.log("Wrong! Use 2 arguments <file_path> and <symbol_code>");
}

else
{
  const filepath = args[0];
  const symbolcode = parseInt(args[1]);

  fs.readFile(filepath, (err,data) =>
  {
    if(err){console.error(`Error reading file: ${err.message}`)}

    else
    {
      let count = 0;

      for(const byte of data)
      {
        if(byte === symbolcode)
        {
          count++;
        }
      }
      // for(const byte in data)
      // {
      //   if(byte === symbolcode)
      //   {
      //     count++;
      //   }
      // }
      console.log(`The symbol ${symbolcode} was found in file ${filepath} - ${count} times`);
    }
  });
}