/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PostV1AuthLoginSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Login Successful","data":{"accessToken":"access token","refreshToken":"refresh token","user":{"_id":"id","email":"example@xyz.abc","emailVerified":false,"role":"user"}}} */
  data: {
    message: string;
    data?: {
      accessToken: string;
      refreshToken: string;
      user: {
        _id: string;
        email: string;
        emailVerified?: boolean;
        role?: 'admin' | 'user';
      };
    };
  };
}

export interface PostV1AuthLoginErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthLoginRequestBody = object & {
  /** Email Of the User */
  email: string;
  /** Password Of the User */
  password: string;
  method?: 'email' | 'google' | 'apple' | 'facebook';
};

export interface PostV1AuthRegisterSuccessfulResponse {
  status: 'success';
  /** @example {"message":"User Created Successfully, Please verify your email","data":{"otpToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9","type":"register"}} */
  data: {
    message: string;
    data?: {
      otpToken?: string;
      type?: string;
    };
  };
}

export interface PostV1AuthRegisterErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthRegisterRequestBody = object & {
  /**
   * Email Of the User
   * @format email
   */
  email: string;
  /**
   * Password Of the User
   * @minLength 8
   * @maxLength 16
   * @pattern /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
   */
  password?: string;
  method?: 'email' | 'google' | 'apple' | 'facebook';
  fullName?: string;
};

export interface PutV1AuthPasswordChangeSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Password Changed Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1AuthPasswordChangeErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1AuthPasswordChangeRequestBody = (object & object) & {
  /**
   * Password Of the User
   * @minLength 8
   * @maxLength 16
   * @pattern /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
   */
  password: string;
  confirmPassword: string;
};

export interface PostV1AuthPasswordForgetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Email Sent Successfully","data":{"otpToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9","type":"reset"}} */
  data: {
    message: string;
    data: {
      otpToken: string;
      type?: string;
    };
  };
}

export interface PostV1AuthPasswordForgetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthPasswordForgetRequestBody = object & {
  /** @format email */
  email: string;
};

export interface PostV1AuthPasswordResetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Password Reset Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1AuthPasswordResetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthPasswordResetRequestBody = object & {
  /** @format email */
  email: string;
  otpToken: string;
  /** @pattern /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/ */
  password: string;
  confirmPassword: string;
};

export interface PostV1AuthVerifyOtpSuccessfulResponse {
  status: 'success';
  /** @example {"message":"OTP Verified Successfully","data":{"otpToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}} */
  data: {
    message?: string;
    data?: {
      otpToken: string;
      type?: string;
    };
  };
}

export interface PostV1AuthVerifyOtpErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1AuthVerifyOtpRequestBody = object & {
  /** @format email */
  email: string;
  otp: string;
  otpToken: string;
};

export interface GetV1ProfileGetSingleSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      fullName?: string;
      /** @format url */
      avatar?: string;
      phone?: string;
      country?: string;
      gender?: string;
      height?: string;
      goal?: string;
      weight?: string;
      /** @format any */
      _id?: any;
      userId: {
        /** @format any */
        _id?: any;
        /** @format email */
        email?: string;
        method?: 'email' | 'google' | 'apple' | 'facebook';
        role?: 'admin' | 'user';
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        registrationDate?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt?: string;
      };
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt?: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt?: string;
    };
  };
}

export interface GetV1ProfileGetSingleErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** @format any */
export type GetV1ProfileGetSingleIdParameterId = any;

export interface GetV1ProfileGetSingleIdSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      fullName?: string;
      /** @format url */
      avatar?: string;
      phone?: string;
      country?: string;
      gender?: string;
      height?: string;
      goal?: string;
      weight?: string;
      /** @format any */
      _id?: any;
      userId: {
        /** @format any */
        _id?: any;
        /** @format email */
        email?: string;
        method?: 'email' | 'google' | 'apple' | 'facebook';
        role?: 'admin' | 'user';
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        registrationDate?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt?: string;
      };
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt?: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt?: string;
    };
  };
}

export interface GetV1ProfileGetSingleIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/**
 * Page Number
 * @minLength 1
 */
export type GetV1ProfileGetAllParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1ProfileGetAllParameterLimit = string;

export type GetV1ProfileGetAllParameterSearch = string;

export interface GetV1ProfileGetAllSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    data: {
      fullName?: string;
      /** @format url */
      avatar?: string;
      phone?: string;
      country?: string;
      gender?: string;
      height?: string;
      goal?: string;
      weight?: string;
      /** @format any */
      _id?: any;
      userId: {
        /** @format any */
        _id?: any;
        /** @format email */
        email?: string;
        method?: 'email' | 'google' | 'apple' | 'facebook';
        role?: 'admin' | 'user';
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        registrationDate?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt?: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt?: string;
      };
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt?: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt?: string;
    }[];
  };
}

export interface GetV1ProfileGetAllErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1ProfileUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Profile Updated"} */
  data: {
    message: string;
  };
}

export interface PostV1ProfileUpdateErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1ProfileUpdateRequestBody = (object & object) & {
  fullName?: string;
  /** @format url */
  avatar?: string;
  phone?: string;
  country?: string;
  gender?: string;
  height?: string;
  goal?: string;
  weight?: string;
};

/** @format any */
export type DeleteV1ProfileDeleteIdParameterId = any;

export interface DeleteV1ProfileDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Profile Deleted Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1ProfileDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/**
 * Page Number
 * @minLength 1
 */
export type GetV1BlogsGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1BlogsGetParameterLimit = string;

export type GetV1BlogsGetParameterSearch = string;

export type GetV1BlogsGetParameterTags = string[];

/** @default "blog" */
export enum GetV1BlogsGetParameterType {
  Blog = 'blog',
  Study = 'study',
}

export interface GetV1BlogsGetSuccessfulResponse {
  status: 'success';
  data: {
    message?: string;
    meta?: {
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      total: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      page: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      limit: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalPages: number;
    };
    blogs?: {
      /** Title Of the Blog */
      title?: string;
      /** Description Of the Blog */
      description?: string;
      /** Content Of the Blog */
      content?: string;
      tags?: string[];
      thumbnail?: string;
      /** @format any */
      _id?: any;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
    }[];
  };
}

export interface GetV1BlogsGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** Id of the Blog */
export type GetV1BlogsGetIdParameterId = string;

export interface GetV1BlogsGetIdSuccessfulResponse {
  status: 'success';
  data: {
    message: string;
    blog: {
      /** Title Of the Blog */
      title?: string;
      /** Description Of the Blog */
      description?: string;
      /** Content Of the Blog */
      content?: string;
      tags?: string[];
      thumbnail?: string;
      /** @format any */
      _id?: any;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      createdAt?: string;
      /**
       * YYYY-MM-DDTHH:mm:ss.sssZ
       * @format date-time
       */
      updatedAt?: string;
    };
  };
}

export interface GetV1BlogsGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface GetV1BlogsTagsSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","tags":["tag1","tag2"]} */
  data: {
    message: string;
    tags: string[];
  };
}

export interface GetV1BlogsTagsErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1BlogsAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1BlogsAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1BlogsAddRequestBody = ((object & object) & object) & {
  /** Title Of the Blog */
  title: string;
  /** Description Of the Blog */
  description: string;
  /** Content Of the Blog */
  content: string;
  tags: string[];
  /**
   * Thumbnail Of the Blog
   * @format url
   */
  thumbnail: string;
};

/** Id of the Blog */
export type DeleteV1BlogsDeleteIdParameterId = string;

export interface DeleteV1BlogsDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1BlogsDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** Id of the Blog */
export type PutV1BlogsUpdateIdParameterId = string;

export interface PutV1BlogsUpdateIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Blog updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1BlogsUpdateIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1BlogsUpdateIdRequestBody = ((object & object) & object) & {
  /** Title Of the Blog */
  title?: string;
  /** Description Of the Blog */
  description?: string;
  /** Content Of the Blog */
  content?: string;
  tags?: string[];
  /**
   * Thumbnail Of the Blog
   * @format url
   */
  thumbnail?: string;
};

export interface PostV1IngredientsAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65ab922e88c5d1ee53717aec","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      name: string;
      category: string;
      unit?: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
      };
      micronutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK';
      }[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    };
  };
}

export interface PostV1IngredientsAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1IngredientsAddRequestBody = (object & object) & {
  name: string;
  category: string;
  micronutrient: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    quantity: number;
    unit:
      | 'g'
      | 'ml'
      | 'kg'
      | 'l'
      | 'lb'
      | 'cal'
      | 'kcal'
      | 'oz'
      | 'tsp'
      | 'tbsp'
      | 'cup'
      | 'pnt'
      | 'qt'
      | 'gal';
    name:
      | 'calories'
      | 'protein'
      | 'fat'
      | 'carbohydrate'
      | 'fiber'
      | 'sugar'
      | 'sodium'
      | 'potassium'
      | 'calcium'
      | 'iron'
      | 'magnesium'
      | 'zinc'
      | 'vitaminA'
      | 'vitaminB6'
      | 'vitaminB12'
      | 'vitaminC'
      | 'vitaminD'
      | 'vitaminE'
      | 'vitaminK';
  }[];
};

export interface PostV1IngredientsGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65ab922e88c5d1ee53717aee","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}]} */
  data: {
    message: string;
    meta: {
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      total: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      page: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      limit: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalPages: number;
    };
    data: {
      /** @format any */
      _id: any;
      name: string;
      category: string;
      unit?: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
      };
      micronutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK';
      }[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    }[];
  };
}

export interface PostV1IngredientsGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1IngredientsGetRequestBody = (object & object) & {
  /**
   * Page Number
   * @minLength 1
   */
  page?: string;
  /**
   * Limit
   * @minLength 1
   */
  limit?: string;
  search?: string;
  category?: string;
};

/** @format any */
export type GetV1IngredientsGetIdParameterId = any;

export interface GetV1IngredientsGetIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65ab922e88c5d1ee53717af0","name":"abc","category":"abc","unit":{"quantity":123,"unit":"cup"},"micronutrient":[{"quantity":123,"unit":"cup","name":"fat"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      name: string;
      category: string;
      unit?: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
      };
      micronutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK';
      }[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
    };
  };
}

export interface GetV1IngredientsGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PutV1IngredientsUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient updated Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1IngredientsUpdateErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1IngredientsUpdateRequestBody = ((object & object) & object) & {
  micronutrient?: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    quantity: number;
    unit:
      | 'g'
      | 'ml'
      | 'kg'
      | 'l'
      | 'lb'
      | 'cal'
      | 'kcal'
      | 'oz'
      | 'tsp'
      | 'tbsp'
      | 'cup'
      | 'pnt'
      | 'qt'
      | 'gal';
    name:
      | 'calories'
      | 'protein'
      | 'fat'
      | 'carbohydrate'
      | 'fiber'
      | 'sugar'
      | 'sodium'
      | 'potassium'
      | 'calcium'
      | 'iron'
      | 'magnesium'
      | 'zinc'
      | 'vitaminA'
      | 'vitaminB6'
      | 'vitaminB12'
      | 'vitaminC'
      | 'vitaminD'
      | 'vitaminE'
      | 'vitaminK';
  }[];
  name?: string;
  unit?: {
    /**
     * @format double
     * @min 5e-324
     * @exclusiveMin false
     * @max 1.7976931348623157e+308
     * @exclusiveMax false
     */
    quantity: number;
    unit:
      | 'g'
      | 'ml'
      | 'kg'
      | 'l'
      | 'lb'
      | 'cal'
      | 'kcal'
      | 'oz'
      | 'tsp'
      | 'tbsp'
      | 'cup'
      | 'pnt'
      | 'qt'
      | 'gal';
  };
  category?: string;
  /** Id of the Blog */
  id: string;
};

/** @format any */
export type DeleteV1IngredientsDeleteIdParameterId = any;

export interface DeleteV1IngredientsDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1IngredientsDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1RecipeAddSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Recipe Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1RecipeAddErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1RecipeAddRequestBody = ((object & object) & object) & {
  /** Name of the Recipe */
  name: string;
  ingredients: string[];
  /** Method of the Recipe */
  method: string;
  /** Diet Type of the Recipe */
  dietType: string;
  /** Allergy Type of the Recipe */
  allergyType: string;
  /**
   * Photo url of the Recipe
   * @format url
   */
  photo: string;
  /** Tags of the Recipe */
  tags: string[];
  mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
};

/**
 * Page Number
 * @minLength 1
 */
export type GetV1RecipeGetParameterPage = string;

/**
 * Limit
 * @minLength 1
 */
export type GetV1RecipeGetParameterLimit = string;

export type GetV1RecipeGetParameterSearch = string;

export type GetV1RecipeGetParameterTags = string[];

export interface GetV1RecipeGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Data fetched Successfully","meta":{"total":1,"page":1,"limit":10,"totalPages":1},"data":[{"_id":"65ab922e88c5d1ee53717af5","name":"abc","ingredients":[{"_id":"65ab922e88c5d1ee53717af6","name":"abc","category":"abc","unit":{"quantity":1,"unit":"cal"},"micronutrient":[{"quantity":1,"unit":"cal","name":"calcium"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}],"method":"abc","dietType":"abc","allergyType":"abc","photo":"abc","tags":["abc"],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z","mealType":"Breakfast","totalQuantity":{"quantity":1,"unit":"cal"},"quantityByMicroNutrient":[{"quantity":1,"unit":"cal","name":"calcium"}]}]} */
  data: {
    message: string;
    meta: {
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      total: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      page: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      limit: number;
      /**
       * @format double
       * @min 5e-324
       * @exclusiveMin false
       * @max 1.7976931348623157e+308
       * @exclusiveMax false
       */
      totalPages: number;
    };
    data: {
      /** @format any */
      _id: any;
      /** Name of the Recipe */
      name: string;
      ingredients: {
        /** @format any */
        _id: any;
        name: string;
        category: string;
        unit?: {
          /**
           * @format double
           * @min 5e-324
           * @exclusiveMin false
           * @max 1.7976931348623157e+308
           * @exclusiveMax false
           */
          quantity: number;
          unit:
            | 'g'
            | 'ml'
            | 'kg'
            | 'l'
            | 'lb'
            | 'cal'
            | 'kcal'
            | 'oz'
            | 'tsp'
            | 'tbsp'
            | 'cup'
            | 'pnt'
            | 'qt'
            | 'gal';
        };
        micronutrient: {
          /**
           * @format double
           * @min 5e-324
           * @exclusiveMin false
           * @max 1.7976931348623157e+308
           * @exclusiveMax false
           */
          quantity: number;
          unit:
            | 'g'
            | 'ml'
            | 'kg'
            | 'l'
            | 'lb'
            | 'cal'
            | 'kcal'
            | 'oz'
            | 'tsp'
            | 'tbsp'
            | 'cup'
            | 'pnt'
            | 'qt'
            | 'gal';
          name:
            | 'calories'
            | 'protein'
            | 'fat'
            | 'carbohydrate'
            | 'fiber'
            | 'sugar'
            | 'sodium'
            | 'potassium'
            | 'calcium'
            | 'iron'
            | 'magnesium'
            | 'zinc'
            | 'vitaminA'
            | 'vitaminB6'
            | 'vitaminB12'
            | 'vitaminC'
            | 'vitaminD'
            | 'vitaminE'
            | 'vitaminK';
        }[];
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt: string;
      }[];
      /** Method of the Recipe */
      method: string;
      /** Diet Type of the Recipe */
      dietType: string;
      /** Allergy Type of the Recipe */
      allergyType: string;
      /** Photo of the Recipe */
      photo: string;
      /** Tags of the Recipe */
      tags: string[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
      mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
      totalQuantity: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: string;
      };
      quantityByMicroNutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK'
          | 'water';
      }[];
    }[];
  };
}

export interface GetV1RecipeGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** @format any */
export type GetV1RecipeGetIdParameterId = any;

export interface GetV1RecipeGetIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65ab922e88c5d1ee53717af3","name":"abc","ingredients":[{"_id":"65ab922e88c5d1ee53717af4","name":"abc","category":"abc","unit":{"quantity":1,"unit":"cal"},"micronutrient":[{"quantity":1,"unit":"cal","name":"calcium"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}],"method":"abc","dietType":"abc","allergyType":"abc","photo":"abc","tags":["abc"],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z","mealType":"Breakfast","totalQuantity":{"quantity":1,"unit":"cal"},"quantityByMicroNutrient":[{"quantity":1,"unit":"cal","name":"calcium"}]}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      /** Name of the Recipe */
      name: string;
      ingredients: {
        /** @format any */
        _id: any;
        name: string;
        category: string;
        unit?: {
          /**
           * @format double
           * @min 5e-324
           * @exclusiveMin false
           * @max 1.7976931348623157e+308
           * @exclusiveMax false
           */
          quantity: number;
          unit:
            | 'g'
            | 'ml'
            | 'kg'
            | 'l'
            | 'lb'
            | 'cal'
            | 'kcal'
            | 'oz'
            | 'tsp'
            | 'tbsp'
            | 'cup'
            | 'pnt'
            | 'qt'
            | 'gal';
        };
        micronutrient: {
          /**
           * @format double
           * @min 5e-324
           * @exclusiveMin false
           * @max 1.7976931348623157e+308
           * @exclusiveMax false
           */
          quantity: number;
          unit:
            | 'g'
            | 'ml'
            | 'kg'
            | 'l'
            | 'lb'
            | 'cal'
            | 'kcal'
            | 'oz'
            | 'tsp'
            | 'tbsp'
            | 'cup'
            | 'pnt'
            | 'qt'
            | 'gal';
          name:
            | 'calories'
            | 'protein'
            | 'fat'
            | 'carbohydrate'
            | 'fiber'
            | 'sugar'
            | 'sodium'
            | 'potassium'
            | 'calcium'
            | 'iron'
            | 'magnesium'
            | 'zinc'
            | 'vitaminA'
            | 'vitaminB6'
            | 'vitaminB12'
            | 'vitaminC'
            | 'vitaminD'
            | 'vitaminE'
            | 'vitaminK';
        }[];
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt: string;
      }[];
      /** Method of the Recipe */
      method: string;
      /** Diet Type of the Recipe */
      dietType: string;
      /** Allergy Type of the Recipe */
      allergyType: string;
      /** Photo of the Recipe */
      photo: string;
      /** Tags of the Recipe */
      tags: string[];
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
      mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
      totalQuantity: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit: string;
      };
      quantityByMicroNutrient: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK'
          | 'water';
      }[];
    };
  };
}

export interface GetV1RecipeGetIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PutV1RecipeUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PutV1RecipeUpdateErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PutV1RecipeUpdateRequestBody = ((object & object) & object) & {
  /** Name of the Recipe */
  name?: string;
  /** Allergy Type of the Recipe */
  allergyType?: string;
  /** Id of the Ingredient */
  ingredients?: any[];
  /** Diet Type of the Recipe */
  dietType?: string;
  /** Method of the Recipe */
  method?: string;
  /** Photo of the Recipe */
  photo?: string;
  /** Tags of the Recipe */
  tags?: string[];
  mealType?: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
  id: string;
};

/** @format any */
export type DeleteV1RecipeDeleteIdParameterId = any;

export interface DeleteV1RecipeDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Recipe Removed Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1RecipeDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1MealPlanUpdateSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Meal Plan Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1MealPlanUpdateErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1MealPlanUpdateRequestBody = (object & object) & {
  /** Id of the Recipe */
  recipe: any[];
  day:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
};

export enum GetV1MealPlanGetParameterDay {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export interface GetV1MealPlanGetSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Ingredient Added Successfully","data":{"_id":"65ab922e88c5d1ee53717af8","userId":"65ab922e88c5d1ee53717af9","recipe":[{"_id":"65ab922e88c5d1ee53717afa","name":"abc","ingredients":[{"_id":"65ab922e88c5d1ee53717afb","name":"abc","category":"abc","unit":{"quantity":1,"unit":"cal"},"micronutrient":[{"quantity":1,"unit":"cal","name":"calcium"}],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z"}],"method":"abc","dietType":"abc","allergyType":"abc","photo":"abc","tags":["abc"],"createdAt":"2021-09-25T06:30:00.000Z","updatedAt":"2021-09-25T06:30:00.000Z","mealType":"Breakfast"}],"day":"Sunday","createdAt":"2024-01-20T09:28:14.473Z","updatedAt":"2024-01-20T09:28:14.473Z","dailyMacro":[{"quantity":1,"unit":"cal","name":"calcium"}]}} */
  data: {
    message: string;
    data: {
      /** @format any */
      _id: any;
      /** @format any */
      userId: any;
      recipe: {
        /** @format any */
        _id: any;
        /** Name of the Recipe */
        name: string;
        ingredients: {
          /** @format any */
          _id: any;
          name: string;
          category: string;
          unit?: {
            /**
             * @format double
             * @min 5e-324
             * @exclusiveMin false
             * @max 1.7976931348623157e+308
             * @exclusiveMax false
             */
            quantity: number;
            unit:
              | 'g'
              | 'ml'
              | 'kg'
              | 'l'
              | 'lb'
              | 'cal'
              | 'kcal'
              | 'oz'
              | 'tsp'
              | 'tbsp'
              | 'cup'
              | 'pnt'
              | 'qt'
              | 'gal';
          };
          micronutrient: {
            /**
             * @format double
             * @min 5e-324
             * @exclusiveMin false
             * @max 1.7976931348623157e+308
             * @exclusiveMax false
             */
            quantity: number;
            unit:
              | 'g'
              | 'ml'
              | 'kg'
              | 'l'
              | 'lb'
              | 'cal'
              | 'kcal'
              | 'oz'
              | 'tsp'
              | 'tbsp'
              | 'cup'
              | 'pnt'
              | 'qt'
              | 'gal';
            name:
              | 'calories'
              | 'protein'
              | 'fat'
              | 'carbohydrate'
              | 'fiber'
              | 'sugar'
              | 'sodium'
              | 'potassium'
              | 'calcium'
              | 'iron'
              | 'magnesium'
              | 'zinc'
              | 'vitaminA'
              | 'vitaminB6'
              | 'vitaminB12'
              | 'vitaminC'
              | 'vitaminD'
              | 'vitaminE'
              | 'vitaminK'
              | 'water';
          }[];
          /** YYYY-MM-DDTHH:mm:ss.sssZ */
          createdAt: string;
          /** YYYY-MM-DDTHH:mm:ss.sssZ */
          updatedAt: string;
        }[];
        /** Method of the Recipe */
        method: string;
        /** Diet Type of the Recipe */
        dietType: string;
        /** Allergy Type of the Recipe */
        allergyType: string;
        /** Photo of the Recipe */
        photo: string;
        /** Tags of the Recipe */
        tags: string[];
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        createdAt: string;
        /** YYYY-MM-DDTHH:mm:ss.sssZ */
        updatedAt: string;
        mealType: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
      }[];
      day:
        | 'Monday'
        | 'Tuesday'
        | 'Wednesday'
        | 'Thursday'
        | 'Friday'
        | 'Saturday'
        | 'Sunday';
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      createdAt: string;
      /** YYYY-MM-DDTHH:mm:ss.sssZ */
      updatedAt: string;
      dailyMacro: {
        /**
         * @format double
         * @min 5e-324
         * @exclusiveMin false
         * @max 1.7976931348623157e+308
         * @exclusiveMax false
         */
        quantity: number;
        unit:
          | 'g'
          | 'ml'
          | 'kg'
          | 'l'
          | 'lb'
          | 'cal'
          | 'kcal'
          | 'oz'
          | 'tsp'
          | 'tbsp'
          | 'cup'
          | 'pnt'
          | 'qt'
          | 'gal';
        name:
          | 'calories'
          | 'protein'
          | 'fat'
          | 'carbohydrate'
          | 'fiber'
          | 'sugar'
          | 'sodium'
          | 'potassium'
          | 'calcium'
          | 'iron'
          | 'magnesium'
          | 'zinc'
          | 'vitaminA'
          | 'vitaminB6'
          | 'vitaminB12'
          | 'vitaminC'
          | 'vitaminD'
          | 'vitaminE'
          | 'vitaminK'
          | 'water';
      }[];
    };
  };
}

export interface GetV1MealPlanGetErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

/** @format any */
export type DeleteV1MealPlanDeleteIdParameterId = any;

export interface DeleteV1MealPlanDeleteIdSuccessfulResponse {
  status: 'success';
  /** @example {"message":"Meal Plan Deleted Successfully"} */
  data: {
    message: string;
  };
}

export interface DeleteV1MealPlanDeleteIdErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export interface PostV1FileUploadSuccessfulResponse {
  status: 'success';
  /** @example {"message":"File Added Successfully","data":[{"etag":"\"a6bbcf1227fde3695d10c402d980d496\"","requestId":"M2JY8HW59S1PET5P","url":"https://ppfitness.s3.amazonaws.com/Screenshot%202024-01-13%20185527.png"}]} */
  data: {
    message: string;
    data: {
      etag?: string;
      requestId?: string;
      url?: string;
    }[];
  };
}

export interface PostV1FileUploadErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1FileUploadRequestBody = object & {
  files: File | File[];
};

export interface PostV1FileDeleteSuccessfulResponse {
  status: 'success';
  /** @example {"message":"File Added Successfully"} */
  data: {
    message: string;
  };
}

export interface PostV1FileDeleteErrorResponse {
  status: 'error';
  error: {
    message: string;
  };
}

export type PostV1FileDeleteRequestBody = object & {
  /** File Urls */
  files: string[];
};

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:8000';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`,
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      key => 'undefined' !== typeof query[key],
    );
    return keys
      .map(key =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? {'Content-Type': type}
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async response => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch(e => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title PP Fitness API
 * @version 1.1.1
 * @baseUrl http://localhost:8000
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthLogin
     * @summary Login endpoint
     * @request POST:/v1/auth/login
     */
    postV1AuthLogin: (
      data: PostV1AuthLoginRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthLoginSuccessfulResponse,
        PostV1AuthLoginErrorResponse
      >({
        path: `/v1/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthRegister
     * @summary Registration endpoint
     * @request POST:/v1/auth/register
     */
    postV1AuthRegister: (
      data: PostV1AuthRegisterRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthRegisterSuccessfulResponse,
        PostV1AuthRegisterErrorResponse
      >({
        path: `/v1/auth/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name PutV1AuthPasswordChange
     * @summary Change Password endpoint
     * @request PUT:/v1/auth/password/change
     * @secure
     */
    putV1AuthPasswordChange: (
      data: PutV1AuthPasswordChangeRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1AuthPasswordChangeSuccessfulResponse,
        PutV1AuthPasswordChangeErrorResponse
      >({
        path: `/v1/auth/password/change`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthPasswordForget
     * @summary Send OTP to user's email address for password res…
     * @request POST:/v1/auth/password/forget
     */
    postV1AuthPasswordForget: (
      data: PostV1AuthPasswordForgetRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthPasswordForgetSuccessfulResponse,
        PostV1AuthPasswordForgetErrorResponse
      >({
        path: `/v1/auth/password/forget`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthPasswordReset
     * @summary Reset Password
     * @request POST:/v1/auth/password/reset
     */
    postV1AuthPasswordReset: (
      data: PostV1AuthPasswordResetRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthPasswordResetSuccessfulResponse,
        PostV1AuthPasswordResetErrorResponse
      >({
        path: `/v1/auth/password/reset`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name PostV1AuthVerifyOtp
     * @summary Verify OTP
     * @request POST:/v1/auth/verify-otp
     */
    postV1AuthVerifyOtp: (
      data: PostV1AuthVerifyOtpRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1AuthVerifyOtpSuccessfulResponse,
        PostV1AuthVerifyOtpErrorResponse
      >({
        path: `/v1/auth/verify-otp`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Profile
     * @name GetV1ProfileGetSingle
     * @summary Get Logged in User Profile endpoint
     * @request GET:/v1/profile/get/single
     * @secure
     */
    getV1ProfileGetSingle: (params: RequestParams = {}) =>
      this.request<
        GetV1ProfileGetSingleSuccessfulResponse,
        GetV1ProfileGetSingleErrorResponse
      >({
        path: `/v1/profile/get/single`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Profile
     * @name GetV1ProfileGetSingleId
     * @summary Get Single User Profile endpoint by Id, only for …
     * @request GET:/v1/profile/get/single/{id}
     * @secure
     */
    getV1ProfileGetSingleId: (
      id: GetV1ProfileGetSingleIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ProfileGetSingleIdSuccessfulResponse,
        GetV1ProfileGetSingleIdErrorResponse
      >({
        path: `/v1/profile/get/single/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Profile
     * @name GetV1ProfileGetAll
     * @summary Get All User Profile endpoint
     * @request GET:/v1/profile/get/all
     * @secure
     */
    getV1ProfileGetAll: (
      query?: {
        /** Page Number */
        page?: GetV1ProfileGetAllParameterPage;
        /** Limit */
        limit?: GetV1ProfileGetAllParameterLimit;
        /** GET /v1/profile/get/all parameter */
        search?: GetV1ProfileGetAllParameterSearch;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1ProfileGetAllSuccessfulResponse,
        GetV1ProfileGetAllErrorResponse
      >({
        path: `/v1/profile/get/all`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Profile
     * @name PostV1ProfileUpdate
     * @summary Update Profile endpoint
     * @request POST:/v1/profile/update
     * @secure
     */
    postV1ProfileUpdate: (
      data: PostV1ProfileUpdateRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1ProfileUpdateSuccessfulResponse,
        PostV1ProfileUpdateErrorResponse
      >({
        path: `/v1/profile/update`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User Profile
     * @name DeleteV1ProfileDeleteId
     * @summary Delete User Profile By Id
     * @request DELETE:/v1/profile/delete/{id}
     * @secure
     */
    deleteV1ProfileDeleteId: (
      id: DeleteV1ProfileDeleteIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1ProfileDeleteIdSuccessfulResponse,
        DeleteV1ProfileDeleteIdErrorResponse
      >({
        path: `/v1/profile/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name GetV1BlogsGet
     * @summary Get all blog endpoint
     * @request GET:/v1/blogs/get
     * @secure
     */
    getV1BlogsGet: (
      query?: {
        /** Page Number */
        page?: GetV1BlogsGetParameterPage;
        /** Limit */
        limit?: GetV1BlogsGetParameterLimit;
        /** GET /v1/blogs/get parameter */
        search?: GetV1BlogsGetParameterSearch;
        /** GET /v1/blogs/get parameter */
        tags?: GetV1BlogsGetParameterTags;
        /** GET /v1/blogs/get parameter */
        type?: GetV1BlogsGetParameterType;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetV1BlogsGetSuccessfulResponse, GetV1BlogsGetErrorResponse>(
        {
          path: `/v1/blogs/get`,
          method: 'GET',
          query: query,
          secure: true,
          format: 'json',
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags Blog
     * @name GetV1BlogsGetId
     * @summary Get single blog endpoint
     * @request GET:/v1/blogs/get/{id}
     * @secure
     */
    getV1BlogsGetId: (
      id: GetV1BlogsGetIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1BlogsGetIdSuccessfulResponse,
        GetV1BlogsGetIdErrorResponse
      >({
        path: `/v1/blogs/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name GetV1BlogsTags
     * @summary Get all blog tags endpoint
     * @request GET:/v1/blogs/tags
     * @secure
     */
    getV1BlogsTags: (params: RequestParams = {}) =>
      this.request<
        GetV1BlogsTagsSuccessfulResponse,
        GetV1BlogsTagsErrorResponse
      >({
        path: `/v1/blogs/tags`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name PostV1BlogsAdd
     * @summary Add Blog endpoint
     * @request POST:/v1/blogs/add
     * @secure
     */
    postV1BlogsAdd: (
      data: PostV1BlogsAddRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1BlogsAddSuccessfulResponse,
        PostV1BlogsAddErrorResponse
      >({
        path: `/v1/blogs/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name DeleteV1BlogsDeleteId
     * @summary Remove Blog endpoint
     * @request DELETE:/v1/blogs/delete/{id}
     * @secure
     */
    deleteV1BlogsDeleteId: (
      id: DeleteV1BlogsDeleteIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1BlogsDeleteIdSuccessfulResponse,
        DeleteV1BlogsDeleteIdErrorResponse
      >({
        path: `/v1/blogs/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name PutV1BlogsUpdateId
     * @summary Update Blog endpoint
     * @request PUT:/v1/blogs/update/{id}
     * @secure
     */
    putV1BlogsUpdateId: (
      id: PutV1BlogsUpdateIdParameterId,
      data: PutV1BlogsUpdateIdRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1BlogsUpdateIdSuccessfulResponse,
        PutV1BlogsUpdateIdErrorResponse
      >({
        path: `/v1/blogs/update/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ingredients
     * @name PostV1IngredientsAdd
     * @summary Add Ingredient endpoint
     * @request POST:/v1/ingredients/add
     * @secure
     */
    postV1IngredientsAdd: (
      data: PostV1IngredientsAddRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1IngredientsAddSuccessfulResponse,
        PostV1IngredientsAddErrorResponse
      >({
        path: `/v1/ingredients/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ingredients
     * @name PostV1IngredientsGet
     * @summary Get all ingredient endpoint
     * @request POST:/v1/ingredients/get
     * @secure
     */
    postV1IngredientsGet: (
      data: PostV1IngredientsGetRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1IngredientsGetSuccessfulResponse,
        PostV1IngredientsGetErrorResponse
      >({
        path: `/v1/ingredients/get`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ingredients
     * @name GetV1IngredientsGetId
     * @summary Get Single Ingredient endpoint
     * @request GET:/v1/ingredients/get/{id}
     * @secure
     */
    getV1IngredientsGetId: (
      id: GetV1IngredientsGetIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1IngredientsGetIdSuccessfulResponse,
        GetV1IngredientsGetIdErrorResponse
      >({
        path: `/v1/ingredients/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ingredients
     * @name PutV1IngredientsUpdate
     * @summary Update Ingredient endpoint
     * @request PUT:/v1/ingredients/update
     * @secure
     */
    putV1IngredientsUpdate: (
      data: PutV1IngredientsUpdateRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1IngredientsUpdateSuccessfulResponse,
        PutV1IngredientsUpdateErrorResponse
      >({
        path: `/v1/ingredients/update`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ingredients
     * @name DeleteV1IngredientsDeleteId
     * @summary Remove Ingredient endpoint
     * @request DELETE:/v1/ingredients/delete/{id}
     * @secure
     */
    deleteV1IngredientsDeleteId: (
      id: DeleteV1IngredientsDeleteIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1IngredientsDeleteIdSuccessfulResponse,
        DeleteV1IngredientsDeleteIdErrorResponse
      >({
        path: `/v1/ingredients/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe
     * @name PostV1RecipeAdd
     * @summary Add Recipe endpoint
     * @request POST:/v1/recipe/add
     * @secure
     */
    postV1RecipeAdd: (
      data: PostV1RecipeAddRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1RecipeAddSuccessfulResponse,
        PostV1RecipeAddErrorResponse
      >({
        path: `/v1/recipe/add`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe
     * @name GetV1RecipeGet
     * @summary Get all ingredient endpoint
     * @request GET:/v1/recipe/get
     * @secure
     */
    getV1RecipeGet: (
      query?: {
        /** Page Number */
        page?: GetV1RecipeGetParameterPage;
        /** Limit */
        limit?: GetV1RecipeGetParameterLimit;
        /** GET /v1/recipe/get parameter */
        search?: GetV1RecipeGetParameterSearch;
        /** GET /v1/recipe/get parameter */
        tags?: GetV1RecipeGetParameterTags;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1RecipeGetSuccessfulResponse,
        GetV1RecipeGetErrorResponse
      >({
        path: `/v1/recipe/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe
     * @name GetV1RecipeGetId
     * @summary Get Single Ingredient endpoint
     * @request GET:/v1/recipe/get/{id}
     * @secure
     */
    getV1RecipeGetId: (
      id: GetV1RecipeGetIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1RecipeGetIdSuccessfulResponse,
        GetV1RecipeGetIdErrorResponse
      >({
        path: `/v1/recipe/get/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe
     * @name PutV1RecipeUpdate
     * @summary Update Ingredient endpoint
     * @request PUT:/v1/recipe/update
     * @secure
     */
    putV1RecipeUpdate: (
      data: PutV1RecipeUpdateRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PutV1RecipeUpdateSuccessfulResponse,
        PutV1RecipeUpdateErrorResponse
      >({
        path: `/v1/recipe/update`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recipe
     * @name DeleteV1RecipeDeleteId
     * @summary Remove Recipe endpoint
     * @request DELETE:/v1/recipe/delete/{id}
     * @secure
     */
    deleteV1RecipeDeleteId: (
      id: DeleteV1RecipeDeleteIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1RecipeDeleteIdSuccessfulResponse,
        DeleteV1RecipeDeleteIdErrorResponse
      >({
        path: `/v1/recipe/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Meal Plan
     * @name PostV1MealPlanUpdate
     * @summary Update Meal Plan
     * @request POST:/v1/meal-plan/update
     * @secure
     */
    postV1MealPlanUpdate: (
      data: PostV1MealPlanUpdateRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1MealPlanUpdateSuccessfulResponse,
        PostV1MealPlanUpdateErrorResponse
      >({
        path: `/v1/meal-plan/update`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Meal Plan
     * @name GetV1MealPlanGet
     * @summary Get Single Ingredient endpoint
     * @request GET:/v1/meal-plan/get
     * @secure
     */
    getV1MealPlanGet: (
      query: {
        /** GET /v1/meal-plan/get parameter */
        day: GetV1MealPlanGetParameterDay;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        GetV1MealPlanGetSuccessfulResponse,
        GetV1MealPlanGetErrorResponse
      >({
        path: `/v1/meal-plan/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Meal Plan
     * @name DeleteV1MealPlanDeleteId
     * @summary Delete Meal Plan endpoint
     * @request DELETE:/v1/meal-plan/delete/{id}
     * @secure
     */
    deleteV1MealPlanDeleteId: (
      id: DeleteV1MealPlanDeleteIdParameterId,
      params: RequestParams = {},
    ) =>
      this.request<
        DeleteV1MealPlanDeleteIdSuccessfulResponse,
        DeleteV1MealPlanDeleteIdErrorResponse
      >({
        path: `/v1/meal-plan/delete/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name PostV1FileUpload
     * @summary Upload File to S3
     * @request POST:/v1/file/upload
     */
    postV1FileUpload: (
      data: PostV1FileUploadRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1FileUploadSuccessfulResponse,
        PostV1FileUploadErrorResponse
      >({
        path: `/v1/file/upload`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name PostV1FileDelete
     * @summary Upload File to S3
     * @request POST:/v1/file/delete
     */
    postV1FileDelete: (
      data: PostV1FileDeleteRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<
        PostV1FileDeleteSuccessfulResponse,
        PostV1FileDeleteErrorResponse
      >({
        path: `/v1/file/delete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
