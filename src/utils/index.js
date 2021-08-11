export const authUser = async (setUser) => {
  if (localStorage.MyToken) {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("MyToken")}` },
      });
      const data = await response.json();
      setUser(data.username);
    } catch (error) {
      console.log(error);
    }
  }
};

export const fetchUsers = async (e, username, email, pass, name, surname, street, city, postcode, setUser) => {
  e.preventDefault();
  try {
    let response;
    if (email) {
      response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: pass,
          name: name,
          surname: surname,
          street: street,
          city: city,
          postcode: postcode
        }),
      });
    } else {
      response = await fetch(
        `${process.env.REACT_APP_REST_API}users/${username}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password: pass,
          }),
        }
      );
    }
    const data = await response.json();
    localStorage.setItem("MyToken", data.token);
    console.log(data);
    setUser(data.user.username);
  } catch (error) {
    console.log(error);
  }
};
