(() => {
  const fullName = (firstName: string, lastName: string): String => {
    return `${firstName} ${lastName}`;
  };

  let name = fullName("tony", "Stark");

  console.log({ name });
})();
