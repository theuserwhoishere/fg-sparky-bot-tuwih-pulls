import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } from "discord.js";

export function createButtonRow(id: string, disabled?: boolean, yesOrNo?: boolean): ActionRowBuilder<ButtonBuilder> {
  const acceptButton = ButtonBuilder.from({
    // @ts-expect-error THERE SHALL BE NO URL
    customId: `${id}-accept-button`,
    label: yesOrNo ? "Yes" : "Accept",
    style: ButtonStyle.Success,
    type: ComponentType.Button,
    disabled,
  });

  const declineButton = ButtonBuilder.from({
    // @ts-expect-error THERE SHALL BE NO URL
    customId: `${id}-reject-button`,
    label: yesOrNo ? "No" : "Reject",
    style: ButtonStyle.Danger,
    type: ComponentType.Button,
    disabled,
  });

  return new ActionRowBuilder<ButtonBuilder>().addComponents(acceptButton, declineButton);
}
