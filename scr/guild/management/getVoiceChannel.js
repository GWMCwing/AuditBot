function getAuthorVCchannel(client, message) {
	return message.member.voice.channel;
}
function getClientVCchannel(client, message) {
	return message.guild.me.voice.channel;
}

module.exports = {
	getAuthorVCchannel,
	getClientVCchannel,
};
