import { commands } from "vscode";
import { TodoPanel } from "./panels/TodoPanel";
export function activate(context) {
    context.subscriptions.push(commands.registerCommand("react-todo.run", () => {
        TodoPanel.render(context.extensionUri);
    }));
}
