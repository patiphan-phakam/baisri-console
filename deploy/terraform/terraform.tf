terraform {
  required_providers {
    huaweicloud = {
      source  = "huaweicloud/huaweicloud"
      version = "1.22.2"
    }
  }

  backend "local" {}
}
