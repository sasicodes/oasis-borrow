import React from 'react'
import { Box, Card, Flex, Heading, Image, Text } from 'theme-ui'

import { FloatingLabel } from './FloatingLabel'
import { AppLink } from './Links'

interface ProductCardBannerProps {
  title: string
  description: string
}

function ProductCardBanner({ title, description }: ProductCardBannerProps) {
  return (
    <Box sx={{ position: 'relative', pb: '24px' }}>
      <Card
        opacity={0.7}
        sx={{
          mixBlendMode: 'overlay',
          backgroundColor: 'black',
          minHeight: [description.length < 28 ? '88px' : '116px', '88px'],
          border: 'unset',
        }}
      />
      <Box
        sx={{
          zIndex: 2,
          position: 'absolute',
          mixBlendMode: 'normal',
          top: '19px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Flex sx={{ flexDirection: 'column', alignItems: 'center', width: ['240px', '280px'] }}>
          <Text sx={{ color: 'text.subtitle' }} variant="paragraph2">
            {title}
          </Text>
          <Text variant="paragraph1" sx={{ textAlign: 'center' }}>
            {description}
          </Text>
        </Flex>
      </Box>
    </Box>
  )
}

interface ProductCardProps {
  tokenImage: string
  title: string
  description: string
  banner: { title: string; description: string }
  leftSlot: { title: string; value: string }
  rightSlot: { title: string; value: string }
  button: { link: string; text: string }
  background: string
  floatingLabelText?: string
}

export function ProductCard({
  tokenImage,
  title,
  description,
  banner,
  leftSlot,
  rightSlot,
  button,
  background,
  floatingLabelText,
}: ProductCardProps) {
  return (
    <Card
      sx={{
        background,
        border: 'unset',
        p: 4,
        maxWidth: '378px',
        minHeight: '608px',
        position: 'relative',
      }}
    >
      {floatingLabelText && (
        <FloatingLabel text={floatingLabelText} flexSx={{ top: 4, right: '-20px' }} />
      )}
      <Flex sx={{ flexDirection: 'column', alignItems: 'center', pb: 2 }}>
        <Image src={tokenImage} sx={{ height: '200px' }} />
        <Heading variant="header2" as="h3" sx={{ fontSize: '28px', pb: 3 }}>
          {title}
        </Heading>
        <Text
          sx={{ color: 'text.subtitle', pb: '12px', fontSize: '15px', textAlign: 'center' }}
          variant="paragraph3"
        >
          {description}
        </Text>
      </Flex>
      <ProductCardBanner {...banner} />
      <Flex sx={{ flexDirection: 'row', justifyContent: 'space-between', pb: '24px' }}>
        <div>
          <Text sx={{ color: 'text.subtitle', pb: 1 }} variant="paragraph3">
            {leftSlot.title}
          </Text>
          <Text variant="paragraph1">{leftSlot.value}</Text>
        </div>
        <div>
          <Text sx={{ color: 'text.subtitle', pb: 1 }} variant="paragraph3">
            {rightSlot.title}
          </Text>
          <Text variant="paragraph1" sx={{ textAlign: 'right' }}>
            {rightSlot.value}
          </Text>
        </div>
      </Flex>
      <Flex>
        <AppLink
          href={button.link}
          variant="primary"
          sx={{ width: '100%', fontWeight: 'body', textAlign: 'center' }}
        >
          {button.text}
        </AppLink>
      </Flex>
    </Card>
  )
}
