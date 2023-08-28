// @ts-nocheck
import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosGet(url) {
  return axios.get(url);
}

export function useAxiosPost(url, data) {
  return axios.post(url, data);
}
