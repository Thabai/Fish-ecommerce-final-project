//login
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

export const fetchUsers = async (e, username, email, pass, name, surname, street, city, postcode, setUser, setUserAdmin, setUserFetch) => {
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
    if (data.user.admin === true) {
      setUserAdmin(data.user.admin);
    } else {
    setUser(data.user);
    setUserFetch(data);
    console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};


//stock
export const findAllFish = async (setStock) => {
  let response;
  try {
    response = await fetch(`${process.env.REACT_APP_REST_API}fishAll`);
    const data = await response.json();
    setStock(data);
  } catch (error) {
    console.log(error);
  }
};


//Users 
export const updateUserDetails = async (
  e,
  email,
  password,
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
        password: password,
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
    setUser(data);
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

//admin
export const createFish = async (
  e,
  name,
  scientific,
  img,
  hab,
  desc,
  temperature,
  temperament,
  food,
  social,
  breeding,
  quant,
  price,
  setStock
) => {
  e.preventDefault();
  try {
    let response;
    let compat = {
      temperature: temperature,
      temperament: temperament,
      food: food,
      social: social,
      breeding: breeding,
    };
      response = await fetch(`${process.env.REACT_APP_REST_API}fish`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          scientific: scientific,
          img: img,
          habitat: hab,
          description: desc,
          compatibility: compat,
          quantity: quant,
          price: price,
      })
    });
      const data = await response.json();
      setStock(data.fish.name);
  } catch (error) {
    console.log(error);
}};

export const findFish = async (e, name, setUpdateStock) => {
    e.preventDefault();
  try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}fish/${name}`, {
        method: "GET",
      });
      const data = await response.json();
      setUpdateStock(data);
    } catch (error) {
      console.log(error);
    }
};

export const updateFish = async (
  e,
  name,
  scientific,
  img,
  hab,
  desc,
  temperature,
  temperament,
  food,
  social,
  breeding,
  quant,
  price,
  setStock
) => {
  e.preventDefault();
  try {
    let response;
    let compat = {
      temperature: temperature,
      temperament: temperament,
      food: food,
      social: social,
      breeding: breeding,
    };
    response = await fetch(`${process.env.REACT_APP_REST_API}fish`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        scientific: scientific,
        img: img,
        habitat: hab,
        description: desc,
        compatibility: compat,
        quantity: quant,
        price: price,
      }),
    });
    const data = await response.json();
    setStock(data.fish);
  } catch (error) {
    console.log(error);
  }
};



export const deleteStock = async (e, del, setStock) => {
  e.preventDefault();
  try {
    let response;
      response = await fetch(`${process.env.REACT_APP_REST_API}fish/${del}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: del
      })
      });
    await response.json();
    setStock();
  } catch (error) {
    console.log(error);
  }
};
