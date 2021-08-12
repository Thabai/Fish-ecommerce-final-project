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

export const fetchUsers = async (e, username, email, pass, name, surname, street, city, postcode, setUser, setUserAdmin) => {
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
    if (data.user.admin === true) {
      setUserAdmin(data.user.admin);
    } else {
    setUser(data.user.username);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserDetails = async (
  e,
  email,
  pass,
  name,
  surname,
  street,
  city,
  postcode,
  user,
  setUser
) => {
  e.preventDefault();

  try {
    let response;
    response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: pass,
        name: name,
        surname: surname,
        street: street,
        city: city,
        postcode: postcode,
        currentUser: user,
      }),
    });
    const data = await response.json();
    console.log(data);
    setUser(data.username);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (user, setUser) => {
  try {
    let response;
    if (user) {
      response = await fetch(`${process.env.REACT_APP_REST_API}users/${user}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.removeItem("MyToken")}`,
        },
        username: user,
      });
    }
    await response.json();
    setUser();
  } catch (error) {
    console.log(error);
  }
};