import type { Command } from "#utils/types.ts";
import { type Client, type CommandInteraction } from "discord.js";

const Ping: Command = {
  async run(client: Client, interaction: CommandInteraction): Promise<void> {
    if (!interaction.isChatInputCommand()) return;
    const { createdTimestamp } = await interaction.reply({
      content: "hi",
      fetchReply: true,
    });
    const roundtrip = createdTimestamp - interaction.createdTimestamp;
    const websocket = client.ws.ping;
    await interaction.editReply(`hi, roundtrip ping was ${roundtrip}ms and the websocket's was ${websocket}ms`);
  },
  description: "Pings the bot",
  name: "ping",
};

export default Ping;
