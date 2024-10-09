(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): String => {
    if (upper) {
      return `${firstName} ${lastName || `-------`}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || `-------`}`;
    }
  };

  let name = fullName("tony", "stark", true);

  console.log({ name });
})();
