import { UserStorage } from "@/entities/User";
import { MessageMenu } from "@/widgets/MessageMenu/ui/MessageMenu";
import { TChatMessage } from "../model/type";
import { ChatStorage } from "@/entities/Chat/lib/ChatStore";
import { ChatMessage } from "../ui/ChatMessage";

export const messageHandler = (messageId : string, messages : TChatMessage[], chatMessageObject : ChatMessage) => {
    const message = document.getElementById(messageId)!;
    if(messages.find(messageItem => messageItem.messageId === messageId)?.message_type === "sticker") {
      return;
    }

    const handleMessageClick = (event : MouseEvent) => {
        console.log("[messageHandler] ПКМ по сообщению", messageId);
        event.preventDefault();
        const pickedMessage = messages.find((elem) => {
          return elem.messageId === messageId;
        });

        if (message) {
          const messageText = message.querySelector("#message-text-content")!.innerHTML;
          console.log("[messageHandler] messageText:", messageText);
          const menu = message.querySelector("#menu-context")!;
          console.log("[messageHandler] menu элемент:", menu);
          const messageMenu = new MessageMenu(menu);
          if (messageText) {
            if (pickedMessage?.chatId === ChatStorage.getCurrentBranchId()) {
                console.log("[messageHandler] branch=true");
                messageMenu.render(pickedMessage, messageId, messageText, event.x-100, event.y-25, chatMessageObject, true);
                return;
            }
            console.log("[messageHandler] branch=false");
            messageMenu.render(pickedMessage!, messageId, messageText, event.x-100, event.y-25, chatMessageObject, false);

           }
        }
      };


    if (message) {
        message.addEventListener("contextmenu", handleMessageClick);
    }




};

