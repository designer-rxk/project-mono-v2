export function HelloWorldAction() {
  return {
    label: "Hello world",
    icon: () => "👋",
    onHandle: () => {
      // Here you can perform your actions
      window.alert("👋 Hello from custom action");
    },
  };
}
