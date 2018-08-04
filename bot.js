const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "!!";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

	client.on('message', async msg => {
	var prefix = "+";
	var user = msg.author;
			var a = msg.guild.roles.find("name", 'Agar');
		if(!a){
        a = await msg.guild.createRole({
		  name: "Agar",
          color: "#ffffff",
          permissions:[]
		})
		
        }
	    var m = msg.guild.roles.find("name", 'Minecraft');
	if(!m){
        m =  await msg.guild.createRole({
		  name: "Minecraft",
          color: "#ffffff",
          permissions:[]
		})
        }
        var f = msg.guild.roles.find("name", 'Fortnite');
		if(!f){
        f =  await msg.guild.createRole({
		  name: "Fortnite",
          color: "#ffffff",
          permissions:[]
		})
        }
        var b = msg.guild.roles.find("name", 'Brawlhalla');
		if(!b){
        b =  await msg.guild.createRole({
		  name: "Brawlhalla",
          color: "#ffffff",
          permissions:[]
		})
        }
        var black = msg.guild.roles.find("name", 'Blacksquad');
	if(!black){
        black =  await msg.guild.createRole({
		  name: "Blacksquad",
          color: "#ffffff",
          permissions:[]
		})
        }

		if (msg.content.startsWith(prefix +'addmerole')) {

		if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
msg.channel.send(`يرحي اختيار رتبة اللعبة الذي تريدها \n1- لعبة اقاريو ⚽ \n2- لعبة ماين كرافت 👶 \n3- لعبة فورت نايت 👊 \n4- لعبة براوهلا  👌 \n5- لعبة بلاك سكواد 🍸\n6- الغاء ❌ \n7- **لديك60 ثانية للاختيار **\n<@${msg.author.id}>`).then(res => {     
     res.react('⚽').then(r=>{     
     res.react('👶').then(r=>{
     res.react('👊').then(r=>{
     res.react('👌').then(r=>{
     res.react('🍸').then(r=>{
     res.react('❌').then(r=>{

    let aaa = (reaction, user) => reaction.emoji.name === '⚽' && user.id === msg.author.id;    
    let mmm = (reaction, user) => reaction.emoji.name === '👶' && user.id === msg.author.id;
    let fff = (reaction, user) => reaction.emoji.name === '👊' && user.id === msg.author.id;
    let bbb = (reaction, user) => reaction.emoji.name === '👌' && user.id === msg.author.id;
    let bbbb = (reaction, user) => reaction.emoji.name === '🍸' && user.id === msg.author.id;
    let ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

    let aa = res.createReactionCollector(aaa, { maxMatches:1 , time: 20000 , });
    let mm = res.createReactionCollector(mmm, { maxMatches:1 , time: 20000 , });
    let ff = res.createReactionCollector(fff, { maxMatches:1 , time: 20000 , });
    let bb = res.createReactionCollector(bbb, { maxMatches:1 , time: 20000 , });
    let bl = res.createReactionCollector(bbbb,{ maxMatches:1 , time: 20000 , });
    let cc = res.createReactionCollector(ccc, { maxMatches:1 , time: 20000 , });

aa.on("collect", r => {
    msg.guild.member(user.id).addRole(a);
	msg.channel.send('`تم اعطائك رتبة للعبة Agar`');
	msg.delete();
	})
mm.on("collect", r => {
    msg.guild.member(user.id).addRole(m);
	msg.channel.send('`تم اعطائك رتبة للعبة Mincraft `');
	msg.delete();
})
ff.on("collect", r => {
    msg.guild.member(user.id).addRole(f);
	msg.channel.send('`تم اعطائك رتبة للعبة Fortnite `');
	msg.delete();
})
bb.on("collect", r => {
    msg.guild.member(user.id).addRole(b);
	msg.channel.send('`تم اعطائك رتبة للعبة Brawlhalla `');
	msg.delete();
})
bl.on("collect", r => {
    msg.guild.member(user.id).addRole(black);
	msg.channel.send('`تم اعطائك رتبة للعبة Blacksquad `');
	msg.delete();
})
cc.on("collect", r => {
	msg.delete();
})
	 })
	 })
	 })
	 })
	 })
	 })
	 })
	 }
	 });

// THIS  MUST  BE  THIS  WAY

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '473246923013357593').setName("W");
client.channels.find('id', '473246923013357593').setName("We");
client.channels.find('id', '473246923013357593').setName("Wel");
client.channels.find('id', '473246923013357593').setName("Welc");
client.channels.find('id', '473246923013357593').setName("Welco");
client.channels.find('id', '473246923013357593').setName("Welcom");
client.channels.find('id', '473246923013357593').setName("Welcome");
client.channels.find('id', '473246923013357593').setName("Welcome T");
client.channels.find('id', '473246923013357593').setName("Welcome To");
client.channels.find('id', '473246923013357593').setName("Welcome To A");
client.channels.find('id', '473246923013357593').setName("Welcome To Ah");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahw");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwa");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak ");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak C ");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak Co ");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak Com ");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak Comm ");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak Commu ");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak Commun ");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak Communi ");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak Communit ");
client.channels.find('id', '473246923013357593').setName("Welcome To Ahwak Community ");
  }, 3000);
});





client.login(process.env.BOT_TOKEN);



  


