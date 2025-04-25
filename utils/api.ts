import { TContact } from "@/types/contact";

export type TResponseContact = {
  results: TContact[];
  info: any;
};

const mapContact = (contact: TContact) => {
  const { name, picture, phone, cell, email, login } = contact;

  return {
    id: login.uuid,
    name: name.first + " " + name.last,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() >= 0.5,
  };
};

const fetchContacts = async () => {
  const res = await fetch(
    "https://randomuser.me/api/?results=100&seed=fullstackio"
  );
  const resJson = (await res.json()) as TResponseContact;
  return resJson.results.map((contact) => mapContact(contact));
};

const fetchUserContact = async () => {
  const res = await fetch("https://randomuser.me/api/?seed=fullstackio");
  const resJson = (await res.json()) as TResponseContact;

  return mapContact(resJson.results[0]);
};

const fetchRandomContact = async () => {
  const res = await fetch("https://randomuser.me/api/");
  const resJson = (await res.json()) as TResponseContact;

  return mapContact(resJson.results[0]);
};

export { fetchContacts, fetchRandomContact, fetchUserContact };
