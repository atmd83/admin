import React, { useState, useEffect } from 'react';
import axios from "axios";

export default async () => {
    const { data } = await axios.get( process.env.NEXT_PUBLIC_CREATOR_URL + '/config/httttt')
    return data;
}